import "./App.css";
import Section from "./Components/Section";
import { sections } from "./contents/sections";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Bonfire Privacy Policy</h1>
        <span>Effective date: March 3, 2022,</span>
      </header>
      {sections.map((section, idx) => (
        <Section title={`${idx + 1}. ${section.title}`}>
          {section.contents}
        </Section>
      ))}
      <footer className="footer">
        <span>Copyright @ 2022 bonfire-io,&nbsp;</span>
        <span>All Rights Reserved</span>
      </footer>
    </div>
  );
}

export default App;
