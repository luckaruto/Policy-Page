import "./App.css";
import Section from "./Components/Section";
import { sections } from "./contents/sections";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Crypto Creatures Privacy Policy</h1>
        <span>Effective date: March 3, 2025,</span>
      </header>
      {sections.map((section, idx) => (
        <Section title={`${idx + 1}. ${section.title}`}>
          {section.contents}
        </Section>
      ))}
      <footer className="footer">
        <span>All Rights Reserved</span>
      </footer>
    </div>
  );
}

export default App;
