import React from 'react'
import Title from '../../Title'
import fotos from '../../../photos.json'
import Card from '../../Card'
import styled from 'styled-components'
import { media } from '../../styles/mixins'

const PopularContainer = styled.section`
display: grid;
grid-template-columns: 230px;
gap: 1rem;


${media.mobile`
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 0.7rem;
`}

`

const fotosPopulares = fotos.filter((item) => item.tagId === 2)

const Populares = () => {
  return (
    <section>
      <Title textSize={'1.4rem'} colorTxt='#bfa2ea'>Populares</Title>
      <PopularContainer>
        {
          fotosPopulares.map((foto) => <Card key={foto.id} foto={foto} footerColor={'#3f5d6f'} textSizeTitle={'0.76rem'} textSizeDec={'0.72rem'} />)
        }
      </PopularContainer>
    </section>
  )
}

export default Populares