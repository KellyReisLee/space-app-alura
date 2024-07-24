
import './App.css'
import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import 'normalize.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Title from './components/Title';


const FundoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 97%);
width: 100%;
min-height: 100vh;
padding: 0 2rem;
`

const AppContainer = styled.div`
width: 1440px;
max-width: 100%;


`

const MainContainer = styled.div`
display: flex;
gap: 1rem;
`

function App() {


  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <AppContainer>
          <Header />
          <MainContainer>
            <SideBar />
            <Title />
          </MainContainer>
        </AppContainer>

      </FundoGradiente>
    </>

  )
}

export default App
