import styled from 'styled-components'

const TitleText = styled.h1`
color: ${props => props.$colorTxt || '#e6e6e6'};
font-size: ${props => props.$textSize || '1.9rem'};
margin-left: 0.3rem;
`

const Title = ({ children, colorTxt, textSize }) => {
  return (
    <TitleText $textSize={textSize} $colorTxt={colorTxt}>
      {children}
    </TitleText>
  )
}

export default Title