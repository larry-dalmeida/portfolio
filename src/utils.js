const LOCALES = ["en", "de"];
export const getLocaleFromURL = () => {
  const locale = window.location.search.replace("?locale=", "");
  if (LOCALES.includes(locale)) {
    return locale;
  }
  return "en";
};
