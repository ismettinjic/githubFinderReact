import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'


function Home() {
  return (
    <>
    <UserSearch></UserSearch>
     <UserResults></UserResults>
    </>
  )
}

export default Home