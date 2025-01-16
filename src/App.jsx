import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Section title="What is React?">
        <p>
          React is a super popular JavaScript library made by Facebook for
          building user interfaces. It helps developers create reusable
          components that handle their own state and update smoothly when
          something changes. Thanks to its virtual DOM, React keeps things
          running fast, and its component-based approach makes it easier to
          build and manage even complex web apps.
        </p>
      </Section>

      <Section title="Benefits of React">
        <ul>
          <li>
            Components Are Better: Using component are a great way to create
            templates for desktop apps or websites.
          </li>
          <li>
            Virtual DOM: React use a Virtual Dom which optimizes rendering
            performance.
          </li>
          <li>
            Rich Ecosystem: React has a massive community and if you need a
            library all you have to do is search and it probably exists.
          </li>
          <li>
            Compatible With TypeScript: A niche reason why I like React better
            but still very helpful when you prefer TS.
          </li>
          <li>
            React Is Easy To Learn: React is very easy to learn and is a easy
            door to open for new developers.
          </li>
        </ul>
      </Section>

      <Section title="Helpful resources">
        <HelpfulResource
          label="React Official Documentation"
          link="https://react.dev/learn"
        />
        <HelpfulResource
          label="React Tutorial: Build an Interactive Tic-Tac-Toe Game"
          link="https://react.dev/learn/tutorial-tic-tac-toe"
        />
        <HelpfulResource
          label="React Hooks Documentation"
          link="https://react.dev/reference/react"
        />
      </Section>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
