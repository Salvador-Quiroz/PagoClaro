declare const currencyCodeBrand: unique symbol;

export type CurrencyCode = string & {
  readonly [currencyCodeBrand]: true;
};

export interface Money {
  readonly amountMinor: number;
  readonly currency: CurrencyCode;
}

/**
 * Checks the ISO 4217 code shape. Provider and merchant configuration must
 * still allowlist currencies that PagoClaro is actually enabled to accept.
 */
export function currencyCode(value: string): CurrencyCode {
  if (!/^[A-Z]{3}$/.test(value)) {
    throw new RangeError("Currency must be a three-letter uppercase code.");
  }

  return value as CurrencyCode;
}

/**
 * Creates money in minor units (for example, centavos for MXN).
 * The currency's minor-unit scale must come from currency/provider
 * configuration; this function never assumes two decimal places.
 */
export function money(amountMinor: number, currency: CurrencyCode): Money {
  if (!Number.isSafeInteger(amountMinor) || amountMinor < 0) {
    throw new RangeError("Money must be a non-negative safe integer in minor units.");
  }

  return Object.freeze({ amountMinor, currency });
}

export function assertPositiveMoney(value: Money): Money {
  if (value.amountMinor <= 0) {
    throw new RangeError("Payment amount must be greater than zero.");
  }

  return value;
}

export function addMoney(left: Money, right: Money): Money {
  if (left.currency !== right.currency) {
    throw new RangeError("Money values must use the same currency.");
  }

  const total = left.amountMinor + right.amountMinor;

  if (!Number.isSafeInteger(total)) {
    throw new RangeError("Money total exceeds the safe integer range.");
  }

  return money(total, left.currency);
}

export function compareMoney(left: Money, right: Money): -1 | 0 | 1 {
  if (left.currency !== right.currency) {
    throw new RangeError("Money values must use the same currency.");
  }

  if (left.amountMinor === right.amountMinor) return 0;
  return left.amountMinor < right.amountMinor ? -1 : 1;
}
