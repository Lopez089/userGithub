import styled from 'styled-components'

export const ButtonStyle = styled.button`
  margin:0.5rem;
  padding: 1em;
  border-radius: 1rem;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.text_primary};
  font-weight: 200;
  border: 0;

  :hover  {
    background: ${props => props.theme.primary_hover};
  }
  :active  {
    background: ${props => props.theme.primary};
  }
`

export const Button = ({ children }) => {
  return (
    <ButtonStyle>{children}</ButtonStyle>
  )
}
