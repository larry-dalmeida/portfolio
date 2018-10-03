import React from "react";
import classnames from "classnames";

import "./LanguageToggle.css";
import { LOCALE_EN, LOCALE_DE } from "./locales";

const LanguageToggle = ({ locale }) => (
  <section className="languages">
    <h2 className="sr-only">Please Choose your preferred language:</h2>
    <a
      href={`/?locale=${LOCALE_EN}`}
      className={classnames({ active: locale === LOCALE_EN })}
    >
      English
    </a>
    <a
      href={`/?locale=${LOCALE_DE}`}
      className={classnames({ active: locale === LOCALE_DE })}
    >
      Deutsch
    </a>
  </section>
);

export default LanguageToggle;
