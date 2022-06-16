import React from 'react'

const NasaPhoto = (props) => {
  return (
    <div className='NasaPhoto-wrapper'>
      <h1>{props.photo.title}</h1>
      <h2>{props.photo.date}</h2>
      <img src={props.photo.hdurl} alt={props.photo.explanation} />
      <p>{props.photo.explanation}</p>
    </div>
  )
}

export default NasaPhoto
