import { assertPositiveMoney, type Money } from "./money.js";

declare const isoTimestampBrand: unique symbol;

export type IsoTimestamp = string & {
  readonly [isoTimestampBrand]: true;
};

export function isoTimestamp(value: string): IsoTimestamp {
  const parsed = Date.parse(value);

  if (!Number.isFinite(parsed) || new Date(parsed).toISOString() !== value) {
    throw new RangeError("Timestamp must be a canonical UTC ISO-8601 value.");
  }

  return value as IsoTimestamp;
}

export type PaymentAttemptStatus =
  | "created"
  | "requires_action"
  | "pending"
  | "processing"
  | "succeeded"
  | "failed"
  | "canceled"
  | "expired";

export interface PaymentAttempt {
  readonly id: string;
  readonly paymentId: string;
  readonly merchantId: string;
  readonly providerCode: string;
  readonly amount: Money;
  readonly status: PaymentAttemptStatus;
  readonly createdAt: IsoTimestamp;
  readonly updatedAt: IsoTimestamp;
}

export interface NewPaymentAttempt {
  readonly id: string;
  readonly paymentId: string;
  readonly merchantId: string;
  readonly providerCode: string;
  readonly amount: Money;
  readonly createdAt: IsoTimestamp;
}

function requireIdentifier(name: string, value: string): void {
  if (value.trim().length === 0) {
    throw new RangeError(name + " must not be empty.");
  }
}

export function createPaymentAttempt(input: NewPaymentAttempt): PaymentAttempt {
  requireIdentifier("id", input.id);
  requireIdentifier("paymentId", input.paymentId);
  requireIdentifier("merchantId", input.merchantId);
  requireIdentifier("providerCode", input.providerCode);
  assertPositiveMoney(input.amount);
  isoTimestamp(input.createdAt);

  return Object.freeze({
    ...input,
    status: "created",
    updatedAt: input.createdAt,
  });
}

export class InvalidPaymentAttemptTransitionError extends Error {
  constructor(
    readonly currentStatus: PaymentAttemptStatus,
    readonly requestedStatus: PaymentAttemptStatus,
  ) {
    super("Payment attempt cannot transition from " + currentStatus + " to " + requestedStatus + ".");
    this.name = "InvalidPaymentAttemptTransitionError";
  }
}

export class StalePaymentAttemptEventError extends Error {
  constructor(
    readonly currentUpdatedAt: IsoTimestamp,
    readonly eventOccurredAt: IsoTimestamp,
  ) {
    super("Payment event is older than the latest applied attempt state.");
    this.name = "StalePaymentAttemptEventError";
  }
}

const allowedTransitions: Readonly<
  Record<PaymentAttemptStatus, readonly PaymentAttemptStatus[]>
> = {
  created: ["requires_action", "pending", "processing", "succeeded", "failed", "canceled", "expired"],
  requires_action: ["pending", "processing", "succeeded", "failed", "canceled", "expired"],
  pending: ["requires_action", "processing", "succeeded", "failed", "canceled", "expired"],
  processing: ["succeeded", "failed", "canceled"],
  succeeded: [],
  failed: [],
  canceled: [],
  expired: [],
};

export function transitionPaymentAttempt(
  attempt: PaymentAttempt,
  nextStatus: PaymentAttemptStatus,
  occurredAt: IsoTimestamp,
): PaymentAttempt {
  isoTimestamp(occurredAt);

  if (Date.parse(occurredAt) < Date.parse(attempt.updatedAt)) {
    throw new StalePaymentAttemptEventError(attempt.updatedAt, occurredAt);
  }

  if (nextStatus === attempt.status) {
    return attempt;
  }

  if (!allowedTransitions[attempt.status].includes(nextStatus)) {
    throw new InvalidPaymentAttemptTransitionError(attempt.status, nextStatus);
  }

  return Object.freeze({
    ...attempt,
    status: nextStatus,
    updatedAt: occurredAt,
  });
}
