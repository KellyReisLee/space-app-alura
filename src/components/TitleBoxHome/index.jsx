import React from 'react'
import styled from 'styled-components'
import titleImage from '../../assets/banner.png'
import Title from '../Title'
import { media } from '../styles/mixins'

const ContainerTitle = styled.div`
background: url(${titleImage});
position: relative;
display: flex;
height: 20rem;
display: grid;
border-radius: 20px;
align-items: center;
`

const Text = styled.div`
position: absolute;
width: 230px;
left: 60px;


`


const TitleBoxHome = () => {
  return (
    <ContainerTitle>
      <Text>
        <Title>A galeria mais completa de fotos do espaço!</Title>
      </Text>
    </ContainerTitle>
  )
}

export default TitleBoxHome