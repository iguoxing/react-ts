import logo from './logo.svg';
import './App.css';
import Welcome from './components/header.tsx'
import Fabric from './components/Fabric'
import Dragable from './components/Dragable'
import HookDemo from './components/Hook'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HookDemo name="Hook"></HookDemo>
        <Dragable name="Dragable"></Dragable>
        <Fabric name="Fabric"></Fabric>
        <Welcome name="React"></Welcome>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
