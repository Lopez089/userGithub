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
  margin-bottom:1rem;
`
