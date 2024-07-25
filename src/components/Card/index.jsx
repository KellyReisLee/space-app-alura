import React from 'react'
import styled from 'styled-components'
import expandir from '../../assets/icones/expandir.png'
import favoritoAtivo from '../../assets/icones/favorito-ativo.png'
import favoritoInativo from '../../assets/icones/favorito.png'

const CardContainer = styled.figure`
background-color: #041026;
width: 100%;
border-radius: 10px;
margin: 0;
position: relative;


img{
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  object-fit: cover;
}

`

const TextContent = styled.figcaption`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.6rem 0.5rem;
font-size: 1rem;
color: whitesmoke;
`
const ContainerInfo = styled.div`
width: 100%;

`
const ContainerIcons = styled.div`
display: flex;
gap: 0.1rem;
justify-content: end;
`

const CardTitle = styled.h4`
margin: 0;
font-size: 0.9rem;
color: #e1e1e1;
`
const CardDesc = styled.p`
margin: 0;
font-size: 0.8rem;
color: #b1b1b1;
`
const Icon = styled.img`
`

const ButtonIcon = styled.button`
cursor: pointer;
background-color: transparent;
border: none;
height: 100%;
width: 27px;

img{
  width: 100%;
}
`




const Card = ({ foto }) => {
  return (
    <CardContainer>
      <img src={foto.path} alt='' />
      <TextContent>
        <ContainerInfo>
          <CardTitle> {foto.titulo}</CardTitle>
          <CardDesc> {foto.fonte}</CardDesc>
        </ContainerInfo>
        <ContainerIcons>
          <ButtonIcon>
            <Icon src={favoritoAtivo} alt='' />
          </ButtonIcon>
          <ButtonIcon>
            <Icon src={expandir} alt='' />
          </ButtonIcon>

        </ContainerIcons>
      </TextContent>
    </CardContainer>
  )
}

export default Card