import { useState, useEffect } from 'react'
import React from 'react'
import One from './Components/One'
import As from './Components/A1'
import { createContext } from 'react'



export const ApiData = createContext();

const App = () => {
  const [data, setData] = useState([])

  async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    response = await response.json()
    console.log(response)
    setData(response)
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {data.length === 0 ? <h1>Loading</h1> : <ApiData.Provider value={data}>
        <One />
        <As />
      </ApiData.Provider>}
    </>
  )
}

export default App;