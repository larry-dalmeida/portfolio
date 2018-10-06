import React from "react";

import "./About.css";
import Polaroid from "./Polaroid";

const About = () => (
  <main className="about">
    <section id="intro" className="page">
      <Polaroid
        src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg"
        alt="Larry saying Hi!"
        title="Business expression"
      />
      <div>
        <header>
          <h1 className="page-headline">
            Hello Berlin! <br /> I'm Larry.
          </h1>
        </header>
      </div>
    </section>

    <section id="intro" className="page">
      <Polaroid
        src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg"
        alt="Larry saying Hi!"
        title="Business expression"
      />
      <div>
        <header>
          <h1 className="page-headline">
            Hello Berlin! <br /> I'm Larry.
          </h1>
        </header>
      </div>
    </section>
  </main>
);

export default About;
