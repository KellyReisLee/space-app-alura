import React from 'react'
import Title from '../../Title'
import fotos from '../../../photos.json'
import Card from '../../Card'
import styled from 'styled-components'

const PopularContainer = styled.section`
display: grid;
grid-template-columns: 230px;
gap: 1rem;
`

const fotosPopulares = fotos.filter((item) => item.tagId === 2)

const Populares = () => {
  return (
    <section>
      <Title textSize={'1.4rem'} colorTxt='#bfa2ea'>Populares</Title>
      <PopularContainer>
        {
          fotosPopulares.map((foto) => <Card key={foto.id} foto={foto} />)
        }
      </PopularContainer>
    </section>
  )
}

export default Populares