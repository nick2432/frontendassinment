import { useEffect, useState } from 'react';
import './App.css';
import Join from './join.js'
import Chatbot from './chatbot';
import Registered from './registered';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <div className="UI">
          <BrowserRouter>
          <Routes>
          <Route path='/'  element={<Join/>}/>
          <Route path='/chatbot'   element={<Chatbot/>}/>
          <Route path='/registered'   element={<Registered/>}/>
          </Routes>
          </BrowserRouter>
        </div>
     </div>
  );
}
export default App;
