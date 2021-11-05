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
          <small>Coded by Teresa Gavric</small>
        </footer>
      </div>
    </div>
  );
}
