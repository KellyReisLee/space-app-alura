import React from 'react'
import Title from '../Title'
import Tags from './Tags'
import styled from 'styled-components'
import Populares from './Populares'


const GaleryContainer = styled.div`
display: flex;
`

const FluidContainer = styled.section`
flex-grow: 1;
`

const Galeria = ({ fotos = [] }) => {
  return (
    <div>
      <Tags />
      <GaleryContainer>
        <FluidContainer>
          <Title colorTxt='#bfa2ea'>Navegue pela Galeria.</Title>
          {
            fotos.map((foto) => {
              return (
                <div key={foto.id}>
                  <img src={foto.path} alt='' />
                  <div>
                    <div>
                      {foto.titulo}
                      {foto.fonte}
                    </div>
                    <div>
                      icon1 icon2
                    </div>
                  </div>
                </div>
              )
            })
          }
        </FluidContainer>
        <Populares />
      </GaleryContainer>
    </div >
  )
}

export default Galeria