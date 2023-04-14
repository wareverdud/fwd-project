import { logOut } from '@/firebase/firebase-setup'
import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter()
  const handleLogout = async () => {
    await logOut()
    await router.push('/')
  }

  return (
    <>
      <h2>Profile</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile
