import React from 'react';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
