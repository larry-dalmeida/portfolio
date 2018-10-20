import React from "react";

import { LOCALE_EN } from "./locales";

export const LocaleContext = React.createContext({
  locale: LOCALE_EN,
  changeLocale: () => {}
});

const withLocale = Component => props => (
  <LocaleContext.Consumer>
    {locale => <Component {...props} {...locale} />}
  </LocaleContext.Consumer>
);

// FIXME: Not used anywhere in the App
export default withLocale;
