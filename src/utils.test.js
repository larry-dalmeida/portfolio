import { getUrlParameter, getLocaleFromURL, addLocaleToURL } from "./utils";

test("should get value of the given parameter", () => {
  const homeURL = "http://larrydalmeida.com/?lang=en#/";
  const aboutURL = "http://larrydalmeida.com/?lang=de#/about";
  expect(getUrlParameter(homeURL, "lang")).toEqual("en");
  expect(getUrlParameter(aboutURL, "lang")).toEqual("de");
});

test("should get a valid locale from URL or English", () => {
  const frInvalidURL = "http://larrydalmeida.com/?lang=fr#/";
  const deValidURL = "http://larrydalmeida.com/?lang=de#/";
  const noLangAboutURL = "http://larrydalmeida.com/#/about";
  expect(getLocaleFromURL(frInvalidURL)).toEqual("en");
  expect(getLocaleFromURL(deValidURL)).toEqual("de");
  expect(getLocaleFromURL(noLangAboutURL)).toEqual("en");
});

test("should get updated URL with locale param", () => {
  const windowLocation = {
    hash: "#/",
    host: "larrydalmeida.com",
    pathname: "/about",
    protocol: "http:"
  };
  expect(addLocaleToURL(windowLocation, "en")).toEqual(
    "http://larrydalmeida.com/about?lang=en#/"
  );
  expect(addLocaleToURL(windowLocation, "de")).toEqual(
    "http://larrydalmeida.com/about?lang=de#/"
  );
});
