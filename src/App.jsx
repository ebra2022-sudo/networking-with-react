import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './Components/Usefetch'
import { FetchData } from './Components/FetchData'

function App() {
  return(
    <FetchData/>
  );
 
}

export default App
