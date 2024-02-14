import React from "react";
import "./App.css";

import { DiPython } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiRubyRough } from "react-icons/di";
import { DiReact } from "react-icons/di";

export default function App() {
  return (
    <div className="App">
      <main>
        <div className="greeting">Hi, I'm Amadeus Kang</div>
        <div className="bar"></div>

        <div className="aboutme">
          <div className="largetext">
            I'm a full-stack software developer based in DC. I build stylish and
            interactive apps.
          </div>
        </div>

        <div className="smalltext">
          <div className="text">Here are some of my skills.</div>
        </div>

        <div className="skills">
          <DiJava style={{ fontSize: "5rem" }} />
          <DiPython style={{ fontSize: "5rem" }} />
          <DiJavascript1 style={{ fontSize: "5rem" }} />
          <DiRubyRough style={{ fontSize: "5rem" }} />
          <DiReact style={{ fontSize: "5rem" }} />
        </div>

        <div className="smalltext">
          <div className="text">And some of my projects.</div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="smalltext">
          <div className="text">Talk to me anytime. I'm always game.</div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="smalltext">
          <div className="text">Here's my resume.</div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="icons"></div>
        <div className="skills"></div>
        <div className="projects"></div>
        <div className="footnote"></div>
      </main>
    </div>
  );
}
