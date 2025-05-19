import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child2 from './Child2';
import Child5 from './Child5';
import CountContext, { CountProvider } from './context/CountContext';
import ThemeContext from './context/ThemeContext';

function App() {
  const [number , setNumber] = useState(0);
  // console.log(setNumber)  
  const {count} = useContext(CountContext);
  const {toggleTheme , theme} = useContext(ThemeContext);

  console.log(theme)
  return (
    <>
    
    <Child2 number={number} />
   <Child5 setNumber={setNumber} />
   <button onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}</button>
    </>

  )
}

export default App
