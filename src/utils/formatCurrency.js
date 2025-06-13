export function formatNairaFromKobo(kobo) {
  const naira = kobo / 100;
  return naira;
}
export function formatNairaWithCommas(kobo) {
  const naira = kobo / 100;
  return `${naira.toLocaleString("en-NG")}`;
}
