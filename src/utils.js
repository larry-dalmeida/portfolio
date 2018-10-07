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
