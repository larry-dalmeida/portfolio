import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <article className="container">
        <header>
          <p className="logo">Larry D'Almeida</p>
          <h1>
            I am a software engineer specializing in building maintainable and
            high performance e-commerce applications.
          </h1>
        </header>

        <main>
          <p>
            These days, I disrupt the online retail space with
            <a
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
                  href="http://stage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stage
                </a>
              </li>
              <li>
                <a
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
            <a href="mailto:hello@larrydalmeida.com">email</a>.
          </address>
        </footer>
      </article>
    );
  }
}

export default Home;
