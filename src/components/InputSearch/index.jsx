import React from 'react'
import styled from 'styled-components'
import { IoSearch } from "react-icons/io5";

// Estilizando o contêiner do input e do ícone
const SearchContainer = styled.div`
  position: relative;
    display: inline-block;
`;


const InputSearch = styled.input`
 height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
   
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;

&::placeholder{
  color: #D9D9D9;
  padding: 1rem;
  letter-spacing: 1px;
  font-size: 17px;
}
`

// Estilizando o ícone
const SearchIcon = styled(IoSearch)`
  position: absolute;
    top: 8px;
    right: 20px;
    width: 30px;
    height: 38px;
    color: #C98CF1;
`;

const Input = () => {
  return (
    <SearchContainer>
      <InputSearch placeholder='O que você procura?' />
      <SearchIcon />
    </SearchContainer>
  )
}

export default Input