import React, { Component, Fragment } from "react";
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from "react-intl";

import Header from "../Common/Header";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <h1>
            <FormattedMessage id="app.portfolio.headline" />
          </h1>
          <p>
            <FormattedMessage
              id="app.portfolio.workCurrent"
              values={{
                linkZalando: <FormattedHTMLMessage id="app.linkZalando" />
              }}
            />
          </p>
          <p>
            <FormattedMessage
              id="app.portfolio.workPrevious"
              values={{
                linkAmplifi: <FormattedHTMLMessage id="app.linkAmplifi" />
              }}
            />
          </p>
          <p>
            <FormattedMessage
              id="app.portfolio.openSource"
              values={{
                linkGitHub: <FormattedHTMLMessage id="app.linkGitHub" />
              }}
            />
          </p>
          <p>
            <FormattedMessage id="app.portfolio.living" />
          </p>
          <p>
            <FormattedMessage id="app.portfolio.interests" />
          </p>
          <section className="links-group">
            <h2>
              <FormattedMessage id="app.portfolio.projects" />
            </h2>
            <ul className="links">
              <li>
                <a
                  className="link"
                  href="https://www.barnesandnoble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Barnes &amp; Noble
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="http://yankeecandle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yankee Candle
                </a>
              </li>
            </ul>
          </section>
        </main>

        <footer>
          <address>
            <FormattedMessage
              id="app.portfolio.contact"
              values={{
                linkEmail: <FormattedHTMLMessage id="app.linkEmail" />
              }}
            />
          </address>
        </footer>
      </Fragment>
    );
  }
}

export default injectIntl(Home);
