import styled from 'styled-components'

const TitleText = styled.h1`
color: ${props => props.$colorTxt || '#e6e6e6'};



`

const Title = ({ children, colorTxt }) => {
  return (
    <TitleText $colorTxt={colorTxt}>
      {children}
    </TitleText>
  )
}

export default Title