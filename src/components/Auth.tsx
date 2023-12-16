import {auth,provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { Button } from 'react-bootstrap';

import Cookies from 'universal-cookie'
const cookie = new Cookies();

interface signI {
    setIsAuth: (arg: boolean) => void
}

const Auth = ({setIsAuth}:signI) => {
    const signInWithGoogle = async () => {
       try {
        const res = await signInWithPopup(auth,provider)
        cookie.set('auth-token',res.user.refreshToken)
        setIsAuth(true)
       } catch (error) {
        console.error(error)
       }
    }
  return (
    <div className='d-flex mt-5 '>
       <div className='m-auto w-75 d-flex align-items-center flex-column mt-5'>
        <h1 className='fs-3 text-center'>Welcome to the chat app</h1>
        <Button variant='primary' onClick={signInWithGoogle} className='mt-5'>Sing In With Google</Button>
       </div>
    </div>
  )
}

export default Auth