import React, { useState } from 'react'
import styled from 'styled-components'
import tagsList from './tags-list'


const Container = styled.div`
display: flex;
color: aliceblue;
margin: 2.2rem 0;
align-items: center;
`

const ListUl = styled.ul`
display: flex;
gap: 1.1rem;
`

const TagsText = styled.h2`
color: #cccccc;
font-size: 2rem;
`

const Navigation = styled.nav`
margin: 0;
`

const TagsItem = styled.li`
cursor: pointer;
font-size: 1.9rem;
background-color: gray;
padding: 1.1rem 2rem;
border-radius: 1rem;
border: 4px solid ${props => props.$borderColor ? '#bfa2ea' : 'gray'};
transition: all 0.3s;

`

const Tags = () => {
  const [isActive, setIsActive] = useState('Estrelas');
  return (
    <Container>
      <TagsText>Busque por tags: </TagsText>
      <Navigation>
        <ListUl>
          {
            tagsList.map((item) => <TagsItem
              $borderColor={item === isActive}
              onClick={() => setIsActive(item)}
              key={item}>{item}</TagsItem>)
          }

        </ListUl>
      </Navigation>
    </Container>
  )
}

export default Tags