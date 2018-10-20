import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <section className="page-not-found">
    <h1>404</h1>
    <p>
      This is not what you seek. But it is what you have found. To find what you
      seek, you must go back to where it all <Link to="/">begins</Link>.
    </p>
  </section>
);

export default NoMatch;
