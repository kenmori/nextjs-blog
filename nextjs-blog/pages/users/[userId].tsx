import { NextPage } from 'next'
import { useRouter } from 'next/router'

const User: NextPage = () => {
  const router = useRouter()
  const { userId } = router.query
  return <div>user Page {userId}</div>
}

export default User
