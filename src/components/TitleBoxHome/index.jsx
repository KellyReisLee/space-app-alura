import React from 'react'
import styled from 'styled-components'
import titleImage from '../../assets/banner.png'
import Title from '../Title'

const ContainerTitle = styled.div`
background: url(${titleImage});
position: relative;
width: 100%;
height: 20rem;
display: flex;
border-radius: 20px;
align-items: center;

`

const Text = styled.div`
position: absolute;
left: 60px;
width: 230px;
`


const TitleBoxHome = () => {
  return (
    <ContainerTitle>
      <Text>
        <Title >A galeria mais completa de fotos do espaço!</Title>
      </Text>
    </ContainerTitle>
  )
}

export default TitleBoxHome