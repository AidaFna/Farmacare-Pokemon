import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import List from './views/stock/list';
import Details from './views/stock/details';
import Confirm from './views/stock/confirm_update'

const App =()=>{
  return  <Router>
            <Routes>              
            <Route path="/:name/update/confirm" element={<Confirm/>}/>
              <Route path="/:name/details" element={<Details/>}/>
              <Route path="/" element={<List/>}/>
            </Routes>
          </Router>
}
export default App;
