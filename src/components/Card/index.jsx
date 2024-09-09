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
width: 25px;
height: 15px;
`

const ButtonIcon = styled.div`
cursor: pointer;
background-color: transparent;
border: none;
display: flex;
justify-content: center;
align-items: center;
padding: 0.3rem;

`




const Card = ({ foto, footerColor, aoZoomFoto }) => {
  const [icons, setIcons] = useState(false)
  const icon = icons ? favoritoAtivo : favoritoInativo
  return (
    <CardContainer $footerColor={footerColor}>
      <Image foto={foto} />
      <TextContent >
        <ContainerIcons>
          <ButtonIcon>
            <Icon
              src={icon}
              alt='icone favorito'
              onClick={() => setIcons(!icons)} />
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