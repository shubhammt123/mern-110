import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child2 from './Child2';
import Child5 from './Child5';
import CountContext, { CountProvider } from './context/CountContext';
import ThemeContext from './context/ThemeContext';
import DynamicForm from './DynamicForm';
import { useDispatch, useSelector } from 'react-redux';
import { deposite, withdrawl } from './redux/slices/accountSlice';

function App() {
  // const [number , setNumber] = useState(0);
  // // console.log(setNumber)  
  // const {count} = useContext(CountContext);
  // const {toggleTheme , theme} = useContext(ThemeContext);

  // console.log(theme)

  const [accBalance ,setAccBalance] = useState(0);

  const {accountBalance} = useSelector((state)=>state.account)

  const dispatch = useDispatch();

  const handleDeposite = ()=>{
    dispatch(deposite(+accBalance));
  };

  const handleWithdrawl= ()=>{
    dispatch(withdrawl(+accBalance));
  }
  return (
    <>
{/*     
    <Child2 number={number} />
   <Child5 setNumber={setNumber} />
   <button onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}</button> */}
   {/* <DynamicForm /> */}
   <div>Rs. {accountBalance}</div>
   <input placeholder='Enter amount' type='number' onChange={(e)=>{setAccBalance(e.target.value)}} />
   <button onClick={handleDeposite}>Deposite</button>
   <button onClick={handleWithdrawl}>Withdrawl</button>
    </>

  )
}

export default App
