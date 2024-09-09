import React, { useState } from 'react'
import styled from 'styled-components'
import expandir from '../../assets/icones/expandir.png'
import favoritoAtivo from '../../assets/icones/favorito-ativo.png'
import favoritoInativo from '../../assets/icones/favorito.png'
import Image from '../Image/index'

const CardContainer = styled.figure`
background-color: ${props => props.$footerColor || '#041026'};
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
justify-content: end;
align-items: center;
padding: 0.6rem 0.5rem;


`

const ContainerIcons = styled.div`
display: flex;
gap: 0.1rem;
justify-content: end;
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




const Card = ({ foto, footerColor, aoZoomFoto }) => {

  return (
    <CardContainer $footerColor={footerColor}>
      <Image foto={foto} />
      <TextContent >
        <ContainerIcons>
          <ButtonIcon>
            <Icon src={favoritoAtivo} alt='icone favorito' />
          </ButtonIcon>
          <ButtonIcon >
            <Icon
              src={expandir}
              alt='icone expandir'
              onClick={() => aoZoomFoto(foto)}
            />
          </ButtonIcon>
        </ContainerIcons>
      </TextContent>
    </CardContainer >
  )
}

export default Card