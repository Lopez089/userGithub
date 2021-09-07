import { NotProfile } from './notProfile'
import { Profile } from './profile'

export const ToggleUser = ({ user }) => {
  return (
    <>
      {user ? <Profile user={user} /> : <NotProfile />}
    </>
  )
}
