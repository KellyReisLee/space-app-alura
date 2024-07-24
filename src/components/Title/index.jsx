import React from 'react'
import styled from 'styled-components'
import titleImage from '../../assets/banner.png'

const ContainerTitle = styled.div`
color: whitesmoke;
background: url(${titleImage});
width: 80%;
height: 15rem;
display: flex;
border-radius: 20px;
align-items: center;
padding: 0 3rem;
`

const Text = styled.div`
width: 300px;

`

const Title = () => {
  return (
    <ContainerTitle>
      <Text>
        <h1>A galeria mais completa de fotos do espaço!</h1>
      </Text>
    </ContainerTitle>
  )
}

export default Title