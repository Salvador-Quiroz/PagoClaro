import type { Money } from "./money.js";
import type { IsoTimestamp, PaymentAttemptStatus } from "./payment-attempt.js";

export interface CreateProviderCheckout {
  readonly merchantId: string;
  readonly paymentId: string;
  readonly attemptId: string;
  readonly amount: Money;
  readonly idempotencyKey: string;
  readonly returnUrl: string;
  readonly expiresAt?: IsoTimestamp;
}

export interface ProviderCheckout {
  readonly providerCode: string;
  readonly providerPaymentId: string;
  readonly checkoutUrl: string;
  readonly status: Exclude<PaymentAttemptStatus, "created">;
  readonly expiresAt?: IsoTimestamp;
}

export interface ProviderPaymentSnapshot {
  readonly providerCode: string;
  readonly providerPaymentId: string;
  readonly amount: Money;
  readonly status: Exclude<PaymentAttemptStatus, "created">;
  readonly updatedAt: IsoTimestamp;
  readonly providerStatus: string;
}

/**
 * rawBody must be the exact bytes received over HTTP. Implementations verify
 * provider signatures against those bytes before returning a normalized event.
 * Never log webhook headers or bodies.
 */
export interface ProviderWebhookRequest {
  readonly rawBody: Uint8Array;
  readonly headers: Readonly<Record<string, string | undefined>>;
  readonly receivedAt: IsoTimestamp;
}

export interface VerifiedProviderWebhook {
  readonly providerCode: string;
  readonly eventId: string;
  readonly providerPaymentId: string;
  readonly amount: Money;
  readonly status: Exclude<PaymentAttemptStatus, "created">;
  readonly occurredAt: IsoTimestamp;
  readonly providerStatus: string;
}

export interface PaymentProviderAdapter {
  readonly code: string;

  createCheckout(input: CreateProviderCheckout): Promise<ProviderCheckout>;

  getPayment(providerPaymentId: string): Promise<ProviderPaymentSnapshot>;

  verifyAndNormalizeWebhook(
    input: ProviderWebhookRequest,
  ): Promise<VerifiedProviderWebhook>;
}
