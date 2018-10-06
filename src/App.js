import React, { PureComponent } from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { HashRouter, Route, Switch } from "react-router-dom";
import deLocaleData from "react-intl/locale-data/de";

import translations from "./i18n/locales";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import LanguageToggle from "./LanguageToggle";
import { LOCALE_EN } from "./locales";
import { getUrlParameter, setLocaleParamInURL } from "./utils";

addLocaleData(deLocaleData);

class App extends PureComponent {
  state = { locale: LOCALE_EN };

  handleChangeLanguage = locale => {
    this.setState({ locale }, () => {
      setLocaleParamInURL(this.state.locale);
    });
  };

  componentDidMount() {
    const locale = getUrlParameter(window.location.href, "lang");
    if (locale.length) {
      this.handleChangeLanguage(locale);
    }
  }

  render() {
    const { locale } = this.state;
    const messages = translations[locale];
    return (
      <article className="container">
        <header>
          <p className="logo">Larry D'Almeida</p>
          <LanguageToggle
            locale={locale}
            onChangeLanguage={this.handleChangeLanguage}
          />
        </header>
        <IntlProvider locale={locale} key={locale} messages={messages}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </HashRouter>
        </IntlProvider>
      </article>
    );
  }
}

export default App;
