import React from 'react'
import styled from 'styled-components'



const ContainerInfo = styled.div`
  width: 100%;
  padding: 0.9rem 0;
  text-align: center;
 
`

const Img = styled.img`
width: 100%;
`

const CardTitle = styled.h4`
  margin: 0;
  font-size: ${(props) => props.$textSizeTitle || '1rem'};
  color: #e1e1e1;
`

const CardDesc = styled.p`
  margin: 0;
  font-size: ${(props) => props.$textSizeDec || '0.8rem'};
  color: #b1b1b1;
`

const Image = ({ foto, textSizeTitle, textSizeDec }) => {
  return (
    <>
      <Img src={foto.path} alt="galaxie images" />
      <ContainerInfo>
        <CardTitle $textSizeTitle={textSizeTitle}>{foto.titulo}</CardTitle>
        <CardDesc $textSizeDec={textSizeDec}>{foto.fonte}</CardDesc>
      </ContainerInfo>
    </>
  )
}

export default Image
