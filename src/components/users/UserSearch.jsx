import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/aler/AlertContext';

function UserSearch() {

    const[text,setText] = useState('');

const{users, searchUsers, clearUsers}= useContext(GithubContext)

const{setAlert} = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)

    const handleClearUsers = () => clearUsers()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text ===''){
            setAlert('Please enter someting', 'error')
        }else{
            searchUsers(text)
            setText('')
        }
    }

    return <>
    <div className="grid grid-cols-1 xl:grid-cols2 lg:grid-cols2 mb-8 gap-8">Search</div>
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input  className='w-full pr-40 bg-gray-200 input input-lg text-black'
                    placeholder="Search"
                    value={text}
                    onChange={handleChange}></input>
                    <button
                    type='submit'
                    className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                   >Go</button>
                </div>
            </div>

        </form>
    </div>
    {users.length>0 && (    <div>
        <button onClick={handleClearUsers} className="btn btn-ghost btn-lg">Clear</button>
    </div>)}

    </>
}
export default UserSearch