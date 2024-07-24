import { useState } from 'react'
import styled from 'styled-components'

import listItems from './listaItems'
import ItemSideBar from './ItemSideBar'



const ListStyled = styled.ul`
padding: 0;
margin: 0;
width: 230px;

`



const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState('Início');

  return (
    <aside>
      <nav>
        <ListStyled>
          {
            listItems.map((item) => {
              return <ItemSideBar item={item} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            })
          }

        </ListStyled>
      </nav>
    </aside>
  )
}

export default SideBar