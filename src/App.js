import { useState } from 'react'
import { ContentInfoUser } from './components/ContentInfoUser'
import { Search } from './components/search'
import { Layout } from './components/layout'
import { ToggleUser } from './components/ToggleUser'

const App = () => {
  const [user] = useState(false)

  return (
    <div>
      <Layout>
        <Search />
        <ContentInfoUser>
          <ToggleUser user={user} />
        </ContentInfoUser>
      </Layout>
    </div>
  )
}

export default App
