import React from 'react';
import logo from './assets/logo.png';
import SearchInput from './components/SearchInput'

const App: React.FC = () => {
  return (
    <div className='box_wrapper'>
      <div className='logo flex justify-center pb-5'>
        <img src={logo} alt="图片错误" className='max-w-xs' />
      </div>
      <div className='search_box flex justify-center '>
        <div className='min-w-550 rounded-l-md'>
          <SearchInput />
        </div>
        <button className='bg-blue-500 text-white rounded-r-md py-2 px-5'>百度一下</button>
      </div>
    </div>
  );
}

export default App;
