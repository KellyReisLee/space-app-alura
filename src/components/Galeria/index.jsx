import React from 'react'
import Title from '../Title'
import Tags from './Tags'
import styled from 'styled-components'
import Populares from './Populares'
import Card from '../Card'
import { media } from '../styles/mixins'


const GaleryContainer = styled.div`
display: flex;
gap: 1rem;


${media.mobile`
flex-direction: column;

`}
`

const FluidContainer = styled.section`
flex-grow: 1;
`

const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 1rem;


${media.mobile`
gap: 0.7rem;
`}

`



const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
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
                  <Card
                    key={foto.id}
                    foto={foto}
                    aoZoomFoto={aoFotoSelecionada}

                  />
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