import './App.css';
import { useState } from "react"
import Movies from "./components/Movies/Movies"
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [mode,setMode] = useState(localStorage.getItem('moviemanagerDarkMode'));
  mode === 'dark' ? document.body.classList.add('bg-gray-800') :  document.body.classList.remove('bg-gray-800')
  console.log(mode); 
  return (
    <div className={`${mode} dark:bg-gray-800`}>
      <Navbar SetDarkMode={setMode}/>
      <Movies />
    </div>
  )
}

export default App
