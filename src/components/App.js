import './css/App.css';
import Links from './Links'

function App() {
  return (
    <div className="App">
      <div id="namespace">
        <div id="avatar-wrap">
          <span class="helper"></span>
          <img src={process.env.PUBLIC_URL + "/avatar.png"} alt="avatar"/>
          <svg viewBox="0 0 110 110">
            <circle cx="55" cy="55" r="53" stroke="white" fill="none" stroke-width="2"/>
          </svg>
        </div>
        <div id="logo-wrap">
          <img id="logo" src={process.env.PUBLIC_URL + "/logo2.png"} alt="logo"/>
        </div>
      </div>
      <Links />
    </div>
  );
}

export default App;
