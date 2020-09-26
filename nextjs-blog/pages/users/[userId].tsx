import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../index.module.css'

const User: NextPage = () => {
  const router = useRouter()
  const { userId } = router.query
  return <div className={styles.userId}>user Page {userId}</div>
}

export default User
