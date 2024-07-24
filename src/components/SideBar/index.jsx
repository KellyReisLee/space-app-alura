import React from 'react'
import styled from 'styled-components'
import ItemSideBar from './ItemSideBar'
import homeAtivo from '../../assets/icones/home-ativo.png'


const ListStyled = styled.ul`
padding: 0;
margin: 0;
width: 112px;
background-color: azure;

`


const SideBar = () => {
  return (
    <aside>
      <nav>
        <ListStyled>
          <ItemSideBar icon={homeAtivo}>Text</ItemSideBar>
        </ListStyled>
      </nav>
    </aside>
  )
}

export default SideBar