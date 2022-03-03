import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Bonfire Privacy Policy</h1>
      </header>
      <section className="section">
        <h3>1. Introduction</h3>
        <span>
          Welcome to bonfire's Privacy Policy. We want to keep your privacy
          "safe". <br />
          Fortunately, now we don't keep any privacy information.
        </span>
      </section>
      <section className="section">
        <h3>2. Owner</h3>
        <span>
          <b>Owner: </b>bonfire-io <br />
          <b>Owner contact email:</b> peopleundercloud@gmail.com <br />
          <b>Github Project:</b>
          <a
            href="https://github.com/bonfire-io/bonfire"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/bonfire-io/bonfire
          </a>
        </span>
      </section>
      <section className="section">
        <h3>3. Login / Sign Up</h3>
        <span>
          Now, you can sign up without any privacy information. <br />
          We just get a user nickname and password. <br />
          So, Login also just require a user nickname and password.
        </span>
      </section>
      <section className="section">
        <h3>4. Personal Data</h3>
        <span>
          We keep messages and discussions from you and others. <br />
          So, You can get that in our system.
        </span>
      </section>
      <footer className="footer">
        <span>Updated: March 3, 2022,</span>
        <span>by peopleundercloud</span>
      </footer>
    </div>
  );
}

export default App;
