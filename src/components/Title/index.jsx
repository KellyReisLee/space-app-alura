import styled from 'styled-components'
import { media } from '../styles/mixins'

const TitleText = styled.h1`
color: ${props => props.$colorTxt || '#e6e6e6'};
font-size: ${props => props.$textSize || '1.9rem'};
margin-left: 0.3rem;


${media.mobile`
text-align: center;
`}
`

const Title = ({ children, colorTxt, textSize }) => {
  return (
    <TitleText $textSize={textSize} $colorTxt={colorTxt}>
      {children}
    </TitleText>
  )
}

export default Title