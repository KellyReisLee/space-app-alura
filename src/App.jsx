
import './App.css'
import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import 'normalize.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Title from './components/Title';
import Galeria from './components/Galeria';

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



function App() {
  return (

    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <Title />

        </MainContainer>
        <Galeria />
      </AppContainer>

    </FundoGradiente>

  )
}

export default App
