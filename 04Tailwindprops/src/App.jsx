import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card'
function App() {
  const [count, setCount] = useState(0)
  let obj = {
    name : "Nikhil Kumar",
    age : 21
  }
let arr = [1, 2, 3, 4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
      <Card  channel = 'Nk tech' btntext = "Click me"/>
      

    </>
  )
}

export default App
