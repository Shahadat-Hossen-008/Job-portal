
import { Button } from '@mui/material'
import { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import AuthContext from '../../../Context/AuthContext/AuthContext'

function GoogleLogin () {
    const {googleSignIn, setUser} = useContext(AuthContext);
    const handleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            setUser(result.user);
            console.log(result.user);
            
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
  return (
    <div>
        <div className="divider">OR</div>
        <Button onClick={handleSignIn} variant='outlined' className='w-full flex items-center gap-2'><FcGoogle className='text-2xl' /> Sign In With Google</Button>
    </div>
  )
}

export default GoogleLogin