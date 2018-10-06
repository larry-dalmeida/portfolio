import React, { PureComponent } from "react";
import { string, func } from "prop-types";
import classnames from "classnames";

import "./LanguageToggle.css";
import { LOCALE_EN, LOCALE_DE } from "./locales";

class LanguageButton extends PureComponent {
  static propTypes = {
    locale: string.isRequired,
    currentlySelectedLocale: string.isRequired,
    onChangeLanguage: func.isRequired
  };

  changeLanguage = () => {
    this.props.onChangeLanguage(this.props.locale);
  };

  render() {
    const { text, currentlySelectedLocale, locale } = this.props;
    return (
      <button
        className={classnames({
          active: currentlySelectedLocale === locale
        })}
        onClick={this.changeLanguage}
      >
        {text}
      </button>
    );
  }
}

const LanguageToggle = ({ locale, onChangeLanguage }) => (
  <section className="languages">
    <h2 className="sr-only">Please Choose your preferred language:</h2>
    <LanguageButton
      text="English"
      currentlySelectedLocale={locale}
      locale={LOCALE_EN}
      onChangeLanguage={onChangeLanguage}
    />
    <LanguageButton
      text="Deutsch"
      currentlySelectedLocale={locale}
      locale={LOCALE_DE}
      onChangeLanguage={onChangeLanguage}
    />
  </section>
);

LanguageToggle.propTypes = {
  locale: string.isRequired,
  onChangeLanguage: func.isRequired
};

export default LanguageToggle;
