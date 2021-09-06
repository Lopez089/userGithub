import { ContentInfoUser } from './components/ContentInfoUser'
import { Search } from './components/search'
import { Layout } from './components/layout'
import { DataUser } from './components/dataUser'
import { DetailUser } from './components/detailUser'
import { DetailGithub } from './components/detailGithub'

const App = () => {
  return (
    <div>
      <Layout>
        <Search />
        <ContentInfoUser>
          <DataUser />
          <DetailGithub />
          <DetailUser />
        </ContentInfoUser>
      </Layout>
    </div>
  )
}

export default App
