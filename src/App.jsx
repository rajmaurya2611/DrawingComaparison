import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Pages/Home"
import { BoxesCore } from './componenets/background-boxes'
import { BackgroundBoxesDemo } from './componenets/backgroundBoxesDemo'

function App() {
  return (
    <>
    <div className='p-0 m-0 '>
    <BackgroundBoxesDemo/>
    </div>
    </>
  );
}

export default App;