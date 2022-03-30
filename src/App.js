/*
 * @Author: ArdenZhao
 * @Date: 2021-12-23 10:36:10
 * @LastEditors: bogon
 * @LastEditTime: 2022-03-30 16:14:57
 * @FilePath: /react-ts/src/App.js
 */
import React, { Suspense } from 'react';
import './App.css';
import PageMenu from './components/PageMenu'
import Welcome from './components/header.tsx'
import Excel from './components/Excel.js'
import Fabric from './components/Fabric'
import Dragable from './components/Dragable'
import ReactProps from './components/react/1-Props'
import ReactRef from './components/react/2-Ref'
import HookUseCallback from './components/react/Hook-useCallback'
import Polygon from './components/Polygon';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "tailwindcss/tailwind.css"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <PageMenu name="Menu"></PageMenu>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Welcome name="World" />} />
              <Route path="/fabric" element={<Fabric name="Fabric" />} />
              <Route path="/polygon" element={<Polygon name="Polygon" />} />
              <Route path="/dragable" element={<Dragable name="Dragable" />} />
              <Route path="/reactProps" element={<ReactProps name="ReactProps" />} />
              <Route path="/reactRef" element={<ReactRef name="ReactRef" />} />
              <Route path="/hookUseCallback" element={<HookUseCallback name="HookUseCallback" />} />
              <Route path="/excel" element={<Excel name="Excel" />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <HookUseCallback name="Hook"></HookUseCallback>
    //   </header>
    // </div>
  );
}

export default App;
