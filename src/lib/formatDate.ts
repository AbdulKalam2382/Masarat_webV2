export function formatDate(dateString: string, locale: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "ar" ? "ar-KW" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
