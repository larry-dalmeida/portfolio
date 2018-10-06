import { LOCALE_EN, LOCALE_DE } from "./locales";

const LOCALES = [LOCALE_EN, LOCALE_DE];

export const getLocaleFromURL = () => {
  const locale = window.location.search.replace("?locale=", "");
  if (LOCALES.includes(locale)) {
    return locale;
  }
  return LOCALE_EN;
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

export const setLocaleParamInURL = locale => {
  // eslint-disable-next-line no-restricted-globals
  const updatedURL = addLocaleToURL(window.location, locale);
  window.history.pushState({ path: updatedURL }, "", updatedURL);
};

export const addLocaleToURL = (windowLocation, locale) => {
  const { protocol, host, pathname, hash } = windowLocation;
  const updatedURL = `${protocol}//${host}${pathname}?lang=${locale}${hash}`;
  return updatedURL;
};
