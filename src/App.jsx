
import './App.css'
import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import 'normalize.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Galeria from './components/Galeria';
import TitleBoxHome from './components/TitleBoxHome';
import photos from './photos.json'
import { useState } from 'react';

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: block;
  
`

const AppContainer = styled.div`
  width: 1400px;
  margin: 0 auto;
  max-width: 100%; 

`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const RightContainer = styled.div`
width: 100%;

`



const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(photos);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <RightContainer>
            <TitleBoxHome />
            <Galeria fotos={fotosGaleria} />
          </RightContainer>
        </MainContainer>

      </AppContainer>

    </FundoGradiente>

  )
}

export default App
