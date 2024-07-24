import React from 'react'
import styled from 'styled-components'


const ListStyledItem = styled.li`
text-decoration: none;

`

const ItemSideBar = ({ children, icon }) => {
  return (
    <ListStyledItem>
      <a href=''>
        <img src={icon} alt='' />
        {children}

      </a>
    </ListStyledItem>
  )
}

export default ItemSideBar