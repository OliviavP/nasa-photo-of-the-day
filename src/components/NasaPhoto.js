import React from 'react'
import styled from 'styled-components'

const StyleWrap = styled.div`
  border: 6px solid gray;
`

const StylePhoto = styled.img`
  width: 30%;
`

const StyleTitle = styled.h1`
margin-top: 2%;
margin-bottom: 2%;
font-size: 40px;
color: white;
&:hover {
  color: limegreen;
  font-size: 50px;
  `

const StyleDate = styled.h2`
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 30px;
  color: silver;
  &:hover {
    color: yellow;
    font-size: 40px;
  }
`
const StyleEx = styled.p`
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 20px;
  color: lightblue;
  padding: 3%;
  &:hover {
    color: deeppink;
    font-size: 25px;
  }
`

const NasaPhoto = (props) => {
  return (
    <StyleWrap className='NasaPhoto-wrapper'>
      <StyleTitle>{props.photo.title}</StyleTitle>
      <StyleDate>{props.photo.date}</StyleDate>
      <StylePhoto src={props.photo.hdurl} alt={props.photo.explanation} />
      <StyleEx>{props.photo.explanation}</StyleEx>
    </StyleWrap>
  )
}

export default NasaPhoto
