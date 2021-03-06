/*
 * @Author: ArdenZhao
 * @Date: 2021-12-23 10:36:10
 * @LastEditors: MacBook-Pro.local
 * @LastEditTime: 2022-05-29 15:57:44
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
import ReactState from './components/react/3-State'
import ReactForm from './components/react/4-Form'
import ReactLifeCycle from './components/react/5-LifeCycle' // 生命周期
import ReactParams from './components/react/6-enent-this' // 事件传参
import HookUseState from './components/react/7-Hook-useState'
import HookUseEffect from './components/react/8-Hook-useEffect'
import HookUseContext from './components/react/9-Hook-useContext'
import HookUseReducer from './components/react/10-Hook-useReducer'
import HookUseRef from './components/react/11-Hook-useRef'
import HookUseMemo from './components/react/12-Hook-useMemo'
import HookUseCallback from './components/react/Hook-useCallback'
import JwtDecodeFunction from './components/lib/1-jwt-decode'
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
              <Route path="/reactState" element={<ReactState name="ReactState" />} />
              <Route path="/reactForm" element={<ReactForm name="ReactForm" />} />
              <Route path="/reactLifeCycle" element={<ReactLifeCycle name="ReactLifeCycle" />} />
              <Route path="/reactParams" element={<ReactParams name="ReactParams" />} />
              <Route path="/hookUseState" element={<HookUseState name="HookUseState" />} />
              <Route path="/hookUseEffect" element={<HookUseEffect name="HookUseEffect" />} />
              <Route path="/hookUseContext" element={<HookUseContext name="HookUseContext" />} />
              <Route path="/hookUseReducer" element={<HookUseReducer name="hookUseReducer" />} />
              <Route path="/hookUseRef" element={<HookUseRef name="hookUseRef" />} />
              <Route path="/hookUseMemo" element={<HookUseMemo name="hookUseMemo" />} />
              <Route path="/hookUseCallback" element={<HookUseCallback name="HookUseCallback" />} />
              <Route path="/excel" element={<Excel name="Excel" />} />
              <Route path="/jwtdecode" element={<JwtDecodeFunction name="JwtDecode" />} />
              <Route path="/divof3" element={<HookUseCallback name="Divof3" />} />
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
