import { DataUser } from './dataUser'
import { DetailUser } from './detailUser'
import { DetailGithub } from './detailGithub'

export const Profile = ({ user }) => {
  return (
    <>
      <DataUser
        avatar={user.avatar_url}
        name={user.name}
        login={user.login}
        bio={user.bio}
        createdAt={user.created_at}
      />
      <DetailGithub
        repos={user.public_repos}
        folowers={user.followers}
        folowing={user.following}
      />
      <DetailUser
        location={user.location}
        url={user.url}
        twitter={user.twitter_username}
        company={user.company}
      />
    </>
  )
}
