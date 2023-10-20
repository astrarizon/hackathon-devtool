// src/App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import CodevPage from './components/CodevPage';
import InspectorPage from './components/InspectorPage';
import TestFlowPage from './components/TestFlowPage';

function App() {
  return (

    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pulsar-codev" element={<CodevPage />} />
                <Route path="/pulsar-inspector" element={<InspectorPage />} />
                <Route path="/pulsar-testflow" element={<TestFlowPage />} />

            </Routes>
        </Router>
    </div>
  );
}

export default App;
