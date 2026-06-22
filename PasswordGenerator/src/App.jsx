

import { useCallback, useState } from 'react'
import './App.css'

function App() {

  let [length, setLength] = useState(0)
  let [numberAllow, setNumberAllow] = useState(false)
  let [charAllow, setCharAllow] = useState(false)
  let [password, setPassword] = useState("")

  const passswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow){
      str += "0123456789"
    }
    if(charAllow){
      str += "!@#$%^&*()-_=+[]{};:'</>/?`~"
    }

    for(let i=1; i <= length; i++){
      let generated = Math.floor(Math.random() * str.length + 1)
      console.log(generated)
      pass = str.charAt(generated)
    }
    setPassword(pass)


  }, [length, numberAllow, charAllow, setPassword])

  

  return (
    <>
      <div className='w-full max-w-md px-3 py-2 rounded-lg my-7 bg-gray-600  mx-auto'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg'>
          <input type="text" />
        </div>
      </div>
    </>
  )
}

export default App
