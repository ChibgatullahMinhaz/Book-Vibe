import React, { useContext } from 'react'
import { AuthContext } from '../../Context/FirebaseAuthContext'
import { toast } from 'react-toastify';

export const Profile = () => {
    const {user,logout } = useContext(AuthContext);
    const {displayName,photoURL} = user;
    const handleSingOut = ()=> {
        logout().then(()=> {
            toast.success('Log-out Successful')
        }).catch(error=> {
            toast.error(error.message)
            toast.error(error.code)
        })
    }
  return (
    <>
    {
        user && <div className='flex justify-center items-center minHeight'>
            <div>
                <h1>{displayName}</h1>
                <img className='rounded-full' src={photoURL} alt="" />
                <button className='btn btn-primary mt-10' onClick={handleSingOut}>Log out</button>
            </div>
        </div>
    }
    </>
  )
}
