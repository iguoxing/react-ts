import logo from './logo.svg';
import './App.css';
import Welcome from './components/header.tsx'
import Fabric from './components/Fabric'
import Dragable from './components/Dragable'
import HookUseCallback from './components/Hook-useCallback'
import Polygon from './components/Polygon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Polygon name="Polygon"></Polygon>
        <Fabric name="Fabric"></Fabric>
        <HookUseCallback name="Hook"></HookUseCallback>
        <Dragable name="Dragable"></Dragable>
        <Welcome name="React"></Welcome>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
