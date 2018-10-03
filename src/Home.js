import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";

import messages from "./messages";

class Home extends Component {
  render() {
    const {
      intl: { formatMessage }
    } = this.props;
    return (
      <Fragment>
        <main>
          <h1>{formatMessage(messages.title)}</h1>
          <p>
            These days, I disrupt the online retail space with
            <a
              className="link"
              href="http://zalando.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zalando
            </a>
            .
          </p>
          <p>
            Previously, I was developing front end architectures at{" "}
            <a
              className="link"
              href="https://goamplifi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amplifi
            </a>
            .
          </p>
          <p>
            My open sourced work can be found on{" "}
            <a
              className="link"
              href="https://github.com/larry-dalmeida"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p>
            After living for many years in Bangalore and Dubai, I now live in
            Berlin.
          </p>
          <p>Besides technology, I thoroughly enjoy studying Anthropology.</p>
          <section className="links-group">
            <h2>Some of the things I have built with great teams are</h2>
            <ul className="links">
              <li>
                <a
                  className="link"
                  href="http://stage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stage
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="http://yankeecandle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YC
                </a>
              </li>
            </ul>
          </section>
        </main>

        <footer>
          <address>
            The best way to contact me is by{" "}
            <a className="link" href="mailto:hello@larrydalmeida.com">
              email
            </a>
            .
          </address>
        </footer>
      </Fragment>
    );
  }
}

export default injectIntl(Home);
