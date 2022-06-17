import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import NasaPhoto from './components/NasaPhoto'
import styled from 'styled-components'

const Style = styled.div`
  background-color: black;
  height: 100%;
`

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
  return <Style className='App'>{data && <NasaPhoto photo={data} />}</Style>
}

export default App
