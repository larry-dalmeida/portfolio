import { getUrlParameter, addLocaleToURL } from "./utils";

test("should get value of the given parameter", () => {
  const homeURL = "http://larrydalmeida.com/?lang=en#/";
  const aboutURL = "http://larrydalmeida.com/?lang=de#/about";
  expect(getUrlParameter(homeURL, "lang")).toEqual("en");
  expect(getUrlParameter(aboutURL, "lang")).toEqual("de");
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
