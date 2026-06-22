
import { useState } from 'react'
import './App.css'

function App() {

let  [color, setColor] = useState("Olive")
 

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap inset-x-0 px-3 bottom-10 justify-center '>
        <div className='flex flex-wrap bg-white px-2 py-1 rounded-3xl justify-center gap-3'>
          <button onClick={() => {setColor("red")}} className='bg-red-600 px-2 py-1 rounded-full text-white justify-center'>Red</button>
          <button onClick={() => {setColor("green")}} className='bg-green-600 px-2 py-1 rounded-full text-white justify-center'>Green</button>
          <button onClick={() => {setColor("blue")}} className='bg-blue-600 px-2 py-1 rounded-full text-white justify-center'>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
