import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { HashRouter, Route, Switch } from "react-router-dom";
import deLocaleData from "react-intl/locale-data/de";

import translations from "./i18n/locales";
import { getLocaleFromURL } from "./utils";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import LanguageToggle from "./LanguageToggle";

addLocaleData(deLocaleData);

const App = () => {
  const locale = getLocaleFromURL();
  const messages = translations[locale];
  return (
    <article className="container">
      <header>
        <p className="logo">Larry D'Almeida</p>
        <LanguageToggle locale={locale} />
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
};

export default App;
