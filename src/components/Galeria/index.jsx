import React from 'react'
import Title from '../Title'
import Tags from './Tags'
import styled from 'styled-components'
import Populares from './Populares'
import Card from '../Card'



const GaleryContainer = styled.div`
display: flex;
gap: 1rem;
`

const FluidContainer = styled.section`
flex-grow: 1;
`

const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(100px, 300px));
gap: 1rem;

`

const Galeria = ({ fotos = [] }) => {
  return (
    <div>
      <Tags />
      <GaleryContainer>
        <FluidContainer>
          <Title textSize={'1.4rem'} colorTxt='#bfa2ea'>Navegue pela Galeria</Title>
          <CardsContainer>
            {
              fotos.map((foto) => {
                return (
                  <Card key={foto.id} foto={foto} />
                )
              })
            }
          </CardsContainer>
        </FluidContainer>
        <Populares />
      </GaleryContainer>
    </div >
  )
}

export default Galeria