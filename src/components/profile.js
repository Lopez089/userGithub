import { DataUser } from './dataUser'
import { DetailUser } from './detailUser'
import { DetailGithub } from './detailGithub'

export const Profile = () => {
  return (
    <>
      <DataUser />
      <DetailGithub />
      <DetailUser />
    </>
  )
}
