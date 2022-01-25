import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import List from './views/stock/list';
import Details from './views/stock/details';

const App =()=>{
  return  <Router>
            <Routes>              
              <Route path="/details/:name" element={<Details/>}/>
              <Route path="/" element={<List/>}/>
            </Routes>
          </Router>
}
export default App;
