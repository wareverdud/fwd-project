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
      <button
        className="mx-2 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  )
}

export default Profile
