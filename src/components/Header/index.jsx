import React from 'react'
import styled from 'styled-components'
import logo from '../../../public/imagens/logo.png'
import Input from '../InputSearch'

const HeaderStyled = styled.header`
padding: 30px 2rem;
display: flex;
justify-content: space-between;

img{
  max-width: 212px;
}

`

const Header = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt='logo' />
      <Input />

    </HeaderStyled>
  )
}

export default Header