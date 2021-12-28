/*
 * @Author: ArdenZhao
 * @Date: 2021-12-23 10:36:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-12-28 09:43:28
 * @FilePath: /react-ts/src/App.js
 */
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
        <Fabric name="Fabric"></Fabric>
        <Polygon name="Polygon"></Polygon>
        <HookUseCallback name="Hook"></HookUseCallback>
        <Dragable name="Dragable"></Dragable>
        <Welcome name="React"></Welcome>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
