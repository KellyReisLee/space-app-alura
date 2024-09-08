import React, { useState } from 'react'
import styled from 'styled-components'
import tagsList from './tags-list'
import { media } from '../../styles/mixins'


const Container = styled.div`
width: 100%;
display: flex;
color: aliceblue;
margin: 2.2rem 0;
align-items: center;


${media.mobile`
flex-direction: column;

`}

`

const ListUl = styled.ul`
width: 100%;
display: flex;
justify-content: start;
align-items: start;
gap: 0.8rem;
`

const TagsText = styled.h3`
width: 26%;
color: #D9D9D9;
font-size: 1.3rem;
margin: 0;

${media.mobile`
font-size: 1.3rem;
`}
`

const Navigation = styled.nav`
width: 100%;
display: flex;
justify-content: center;
align-items: center;




${media.mobile`
flex-direction: column;
justify-content: center;
align-items: center;

`}
`

const TagsItem = styled.li`
cursor: pointer;
font-size: 0.8rem;
background-color: gray;
padding: 0.6rem 1.5rem;
border-radius: 1rem;
border: 4px solid ${props => props.$borderColor ? '#dacaf3' : 'gray'};
transition: all 0.3s;



${media.mobile`
font-size: 1.2rem;
background-color: gray;
padding: 0.7rem 1.6rem;
`}

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