

import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  let [length, setLength] = useState(10)
  let [numberAllow, setNumberAllow] = useState(false)
  let [charAllow, setCharAllow] = useState(false)
  let [password, setPassword] = useState("")

  const refPassword = useRef(null)

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
      // console.log(generated)
      pass += str.charAt(generated)
    }
    setPassword(pass)


  }, [length, numberAllow, charAllow, setPassword])

  useEffect(() => {
    passswordGenerator()
  }, [length, charAllow, numberAllow, passswordGenerator])

  // for copy password to clip board
  let copyPassword = useCallback(() => {
    refPassword.current?.select()
    refPassword.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password)
  }, [password])
  

  return (
    <>
      <div className='w-full max-w-md px-3 py-2 rounded-lg my-7 bg-gray-600   mx-auto'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-3.5'>
          <input type="text"  value={password} ref={refPassword} placeholder='Password' readOnly
           className='outline-none w-full py-1 px-3 bg-amber-50'/>
           <button onClick={copyPassword} className='bg-blue-500 py-3 px-2 shrink-0 outline-none text-white'>Copy</button>
        </div>
        {/* values  */}
        <div className='flex mt-4 gap-x-2 text-sm text-white' >
          {/* for length */}
          <div className='flex gap-x-1.5 '>
            <input type="range" 
              min={5} max={20} 
              className='cursor-pointer'
              value={length} 
              onChange={(e) => {
                setLength(e.target.value)
              }}/>
              <label >length: {length}</label>
          </div>
          {/* for number allowed or not */}
          <div className='flex gap-x-1.5 items-center'>
            <input type="checkbox" 
              id='numberInput'
              defaultChecked= {numberAllow}
              onChange={() => {
                setNumberAllow((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput" >Number</label>
            
          </div>
          {/* Character allow or not */}
              <div className='flex items-center gap-x-1.5'>
                <input type="checkbox" 
                defaultChecked = {charAllow}
                id='characterInput'
                onChange={() => {
                  setCharAllow((prev) => !prev)
                  // setCharAllow(true)
                }}
                />
                <label htmlFor="characterInput">Character</label>
              </div>
        </div>
      </div>
    </>
  )
}

export default App
