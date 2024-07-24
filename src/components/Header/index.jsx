import React from 'react'
import styled from 'styled-components'
import Input from '../InputSearch'

const HeaderStyled = styled.header`
padding: 30px 0;
display: flex;
justify-content: space-between;

img{
  max-width: 212px;
}

`

const Header = () => {
  return (
    <HeaderStyled>
      <img src={'/logo.png'} alt='logo' />
      <Input />

    </HeaderStyled>
  )
}

export default Header