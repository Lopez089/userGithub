import styled from 'styled-components'

export const Wapper = styled.section`
  background: ${props => props.theme.primary};
  height: 100vh ;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.section`
  min-width: 50%;
`
export const CardHeader = styled.section`
  display:flex;
  justify-content:space-between;
  margin-bottom:2rem;
`
export const Form = styled.form`
  background: ${props => props.theme.bg};
  border-radius:1rem;
  margin-bottom:2rem;
  display: flex;
  align-items:center;


`
export const Input = styled.input`
  background: ${props => props.theme.bg};
  border-radius:1rem;
  width: 100%;
  padding-left:3.5rem;
  border:0;
  outline: none;
  color: ${props => props.theme.text_primary};
  font-weight:300;
  


  ::placeholder {
    color: ${props => props.theme.text_primary};
  }
`
export const Icon = styled.div`
  position: absolute;
  font-size: 1.5rem;
  margin-left:1rem;
  color:${props => props.theme.secondary};
`
export const ButtonStyle = styled.button`
  margin:0.5rem;
  padding: 1em;
  border-radius: 1rem;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.text_primary};
  font-weight: 200;
  border: 0;
  cursor: pointer;
  :hover  {
    background: ${props => props.theme.primary_hover};
  }
  :active  {
    background: ${props => props.theme.primary};
  }
`
