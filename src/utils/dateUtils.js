/**
 * Adds N months to a date string "YYYY-MM-DD".
 * Clamps to the last day of the resulting month.
 */
export const addMonths = (s, n) => {
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(y, m - 1 + n, d);
  if (dt.getDate() !== d) dt.setDate(0);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
};

/** Adds N days to a date string "YYYY-MM-DD". */
export const addDays = (s, n) => {
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(y, m - 1, d + n);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
};

/** Returns today as "YYYY-MM-DD". */
export const todayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

/** Formats a number as BRL currency string (without the R$ prefix). */
export const fmtMoney = (v) =>
  new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(v));

/** Formats a number as a signed BRL string, e.g. "- R$ 1.200,00". */
export const fmtBRL = (v) => (v < 0 ? "- " : "") + "R$ " + fmtMoney(v);

/**
 * Returns the difference in days between a date string and today.
 * Negative = overdue, 0 = today, positive = future.
 */
export const daysDiff = (s) =>
  Math.floor(
    (new Date(s + "T12:00:00") - new Date(todayStr() + "T12:00:00")) / 864e5
  );

/**
 * Returns the next occurrence date for a recurring transaction.
 * @param {string} base  - base date "YYYY-MM-DD"
 * @param {number} i     - iteration index (1-based)
 * @param {string} interval - recurrence interval key
 */
export const getNextDate = (base, i, interval) => {
  if (interval === "weekly")     return addDays(base, i * 7);
  if (interval === "biweekly")   return addDays(base, i * 14);
  if (interval === "quarterly")  return addMonths(base, i * 3);
  if (interval === "semiannual") return addMonths(base, i * 6);
  if (interval === "yearly")     return addMonths(base, i * 12);
  return addMonths(base, i); // monthly (default)
};
