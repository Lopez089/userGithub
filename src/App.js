import { useState, useEffect } from 'react'
import { getUser } from './util/util'
import { ContentInfoUser } from './components/ContentInfoUser'
import { Search } from './components/search'
import { Layout } from './components/layout'
import { ToggleUser } from './components/ToggleUser'

const App = () => {
  const [user, setUser] = useState(false)

  const handleSubmit = (e, inputvalue) => {
    e.preventDefault()
    getUser(setUser, inputvalue)
  }

  useEffect(() => {
    getUser(setUser)
  }, [])

  return (
    <div>
      <Layout>
        <Search handleSubmit={handleSubmit} />
        <ContentInfoUser>
          <ToggleUser user={user} />
        </ContentInfoUser>
      </Layout>
    </div>
  )
}

export default App
