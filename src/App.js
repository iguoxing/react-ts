/*
 * @Author: ArdenZhao
 * @Date: 2021-12-23 10:36:10
 * @LastEditors: bogon
 * @LastEditTime: 2022-03-15 18:25:40
 * @FilePath: /react-ts/src/App.js
 */
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import PageMenu from './components/PageMenu'
import Welcome from './components/header.tsx'
import Fabric from './components/Fabric'
import Dragable from './components/Dragable'
import HookUseCallback from './components/Hook-useCallback'
import Polygon from './components/Polygon';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <PageMenu name="Menu"></PageMenu>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Welcome name="React" />} />
              <Route path="/fabric" element={<Fabric name="Fabric" />} />
              <Route path="/polygon" element={<Polygon name="Polygon" />} />
              <Route path="/dragable" element={<Dragable name="Dragable" />} />
              <Route path="/hookUseCallback" element={<HookUseCallback name="HookUseCallback" />} />
              {/* <Route path="/polygon" element={<Polygon name="Fabric" />} /> */}
            </Routes>
          </Suspense>
        </div>
      </div>
      {/*
      <Polygon name="Polygon"></Polygon>
      <HookUseCallback name="Hook"></HookUseCallback>
      <Dragable name="Dragable"></Dragable> */}
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <HookUseCallback name="Hook"></HookUseCallback>
    //   </header>
    // </div>
  );
}

export default App;
