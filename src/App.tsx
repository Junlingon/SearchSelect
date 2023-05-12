import React from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className='box_wrapper m-2'>
      <div className='logo'>
        <img src={logo} alt="xxxs" />
      </div>
      <div className='search_box'>
        <input type="text" />
        <button>按钮</button>
      </div>
    </div>
  );
}

export default App;
