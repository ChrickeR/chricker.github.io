// What a physical copy costs, and where an order goes.
//
// There is no shop and no payment on the site. The order dialog does the
// arithmetic in the browser, then hands the whole thing to the reader's own
// mail client — nothing is transmitted, stored or charged here. Christoffer
// confirms the total and sends payment details by return.
//
// Every number below is a real commitment to whoever reads it, so they live in
// one place rather than scattered through the markup.

/** Where orders arrive. */
export const orderEmail = 'flow@troi.se';

/**
 * Price of one copy, INCLUDING VAT, in SEK. Postage is added on top.
 */
export const priceIncVat = 500;

/**
 * VAT rate contained in that price. 6% is the Swedish rate for printed books;
 * change it here if that ever stops being the right figure.
 */
export const vatRate = 0.06;

/**
 * Postage for one parcel within Sweden, in SEK, charged at roughly what it
 * costs to send. Anywhere else is quoted before anything is sent — which is
 * why the dialog calls the total an estimate rather than an invoice.
 */
export const shippingSweden = 65;

/** How many copies fit in one parcel. Past ten, it becomes two. */
export const copiesPerParcel = 10;

export type PaymentMethod = 'Invoice' | 'Swish';
export const paymentMethods: PaymentMethod[] = ['Invoice', 'Swish'];

export interface OrderTotals {
  quantity: number;
  /** Books at the inclusive price. */
  books: number;
  /** The VAT already contained in `books`, shown for information. */
  vat: number;
  /** How many parcels the order takes — postage is per parcel. */
  parcels: number;
  shipping: number;
  total: number;
}

/** One place for the sum, so the dialog and any future page agree. */
export function orderTotals(quantity: number): OrderTotals {
  const qty = Math.max(1, Math.floor(quantity || 1));
  const books = priceIncVat * qty;
  const vat = Math.round(books - books / (1 + vatRate));
  const parcels = Math.ceil(qty / copiesPerParcel);
  const shipping = shippingSweden * parcels;
  return { quantity: qty, books, vat, parcels, shipping, total: books + shipping };
}

/** SEK, no decimals — the prices are whole kronor and pretending otherwise
 *  makes a small order look like an invoice from a phone company. Written SEK
 *  rather than kr, because the page is in English and buyers are not all here. */
export function kr(amount: number): string {
  return `${amount.toLocaleString('sv-SE')} SEK`;
}
