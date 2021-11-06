import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./TG_Logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} alt="logo" />
        <h1>Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            Coded by Teresa Gavric
            <br />
            <a
              href="https://github.com/ter-gav/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced on GitHub
            </a>{" "}
            &{" "}
            <a
              href="https://angry-shockley-dc44da.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
