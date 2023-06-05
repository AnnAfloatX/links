import './css/App.css';
import Links from './Links'

function App() {
  return (
    <div className="App">
      <div id="namespace">
        <img src={process.env.PUBLIC_URL + "/avatar.png"} alt="avatar" width="96" height="96"/>
        <div id="name">Ann Afloat</div>
      </div>
      <Links />
    </div>
  );
}

export default App;
