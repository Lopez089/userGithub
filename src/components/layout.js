import { ButtonModeDark } from './butonModeDark'
import { Wapper, Card, CardHeader } from '../styles/components'

export const Layout = ({ children }) => {
  return (
    <Wapper>
      <Card>
        <CardHeader>
          <h1>devfinder</h1>
          <ButtonModeDark />
        </CardHeader>
        {children}
      </Card>
    </Wapper>
  )
}
