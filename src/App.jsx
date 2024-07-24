
import './App.css'
import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import 'normalize.css';


const FundoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 97%);
width: 100%;
min-height: 100vh;

`

function App() {


  return (
    <FundoGradiente>
      <EstilosGlobais />
    </FundoGradiente>
  )
}

export default App
