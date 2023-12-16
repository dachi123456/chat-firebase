import { useRef, useState } from "react"
import Auth from "./Auth"

import Cookies from "universal-cookie"
import Chat from "./Chat"
import { Button } from "react-bootstrap"

const cookie = new Cookies

const Registration = () => {
    const [isAuth, setIsAuth] = useState(cookie.get('auth-token'))
    const [room, setRoom] = useState(null)
    const roomInputRef = useRef(null);
    if(!isAuth){
        return (
            <div>
              <Auth setIsAuth = {setIsAuth}/>
            </div>
          )
    }
    return(
        <div>
            {room ? 
            <div>
                <Chat room = {room}/>
            </div> : 
            
            <div className="w-75 m-auto d-flex align-items-center flex-column mt-5">
                <label className="fw-bold">Enter The Room Name</label>
                <input type="text" ref={roomInputRef} className="mt-3 "/>
                <Button onClick={() => setRoom(roomInputRef.current?.value)} className="mt-3">Enter Room</Button>
            </div>}
        </div>
    )
  
}

export default Registration