import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import NasaPhoto from './components/NasaPhoto'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=WMWNrxgVLtKd7DjWiUy3XwazYpk2kYX13ZlM8krv'
      )
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.error(err))
  }, [])
  return <div className='App'>{data && <NasaPhoto photo={data} />}</div>
}

export default App
