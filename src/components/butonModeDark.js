import { BiSun } from 'react-icons/bi'
import styled from 'styled-components'
const WapperButtonDark = styled.div`
  width:80px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export const ButtonModeDark = () => {
  return (
    <WapperButtonDark>
      Light
      <BiSun />
    </WapperButtonDark>
  )
}
