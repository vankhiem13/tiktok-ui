import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500">
        Tailwind v4 OK!
      </h1>
    </div>
    <button className="
  px-4 py-2
  bg-blue-500
  text-white
  rounded-lg
  hover:bg-blue-600
">
  Đăng nhập
</button>
<button className="
  bg-blue-500
  hover:bg-blue-600
  active:bg-blue-700
  focus:ring-2 focus:ring-blue-300
">
  Đăng nhập
</button>

    
<div className=" p-4 bg-white rounded-lg shadow">
  <h2 className="text-lg font-semibold mb-2">Tiêu đề</h2>
  <p className="text-gray-600">Nội dung</p>
</div> 


        </>
    );
}

export default App;
