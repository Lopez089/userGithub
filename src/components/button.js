import styled from 'styled-components'

export const Button = ({ className, children }) => {
  return (
    <button className={className}>{children}</button>
  )
}

export const ButtonStyle = styled(Button)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.primary};
  
  :hover  {
    color: ${props => props.theme.primary_hover};
  }
`
