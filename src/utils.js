import { LOCALE_EN, LOCALE_DE } from "./locales";

export const isValidLocale = locale => {
  const LOCALES = [LOCALE_EN, LOCALE_DE];
  return LOCALES.includes(locale);
};

export const getUrlParameter = (url, name) => {
  // eslint-disable-next-line no-useless-escape
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  // eslint-disable-next-line no-restricted-globals
  var results = regex.exec(url);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

export const getLocaleFromURL = url => {
  const detectedLocale = getUrlParameter(url, "lang");
  return isValidLocale(detectedLocale) ? detectedLocale : LOCALE_EN;
};

export const setLocaleParamInURL = locale => {
  // eslint-disable-next-line no-restricted-globals
  const updatedURL = addLocaleToURL(window.location, locale);
  window.history.pushState({ path: updatedURL }, "", updatedURL);
};

export const addLocaleToURL = (location, locale) => {
  const { protocol, host, pathname, hash } = location;
  const updatedURL = `${protocol}//${host}${pathname}?lang=${locale}${hash}`;
  return updatedURL;
};

export const detectLocale = navigator => {
  // Define user's language. Different browsers have the user locale defined
  // on different fields on the `navigator` object, so we make sure to account
  // for these different by checking all of them
  const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

  // Split locales with a region code
  const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
  return languageWithoutRegionCode;
};
