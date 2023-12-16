import { useEffect, useState } from "react"
import {addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where} from 'firebase/firestore'
import { auth, db } from "../firebase-config"
import { Button } from "react-bootstrap"
import './Chat.css'
const Chat = ({room}) => {
    const [newMessage, setNewMessage] = useState('')
    const messagesRef = collection(db, 'messages')
    const [messages, setMessages] = useState([])
    const handleSubmit = async(e) => {
        e.preventDefault()
        if(!newMessage) return;
        
        await addDoc(messagesRef, {
            text : newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,

        });
        setNewMessage('')
    }

    useEffect(() => {
        const queryMessages = query(messagesRef,where("room", "==", room),orderBy('createdAt'))
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
            const messages = []
            snapshot.forEach(doc => {
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })

        return () => unsuscribe()
    }, [])
  return (
    <div className="chat-container">
        {messages.map(el => <div key={el.id}>
            <span style={{width: '100%', }} className="">
                <h4 style={{fontWeight:'900',display:'inline'}}>{el.user} : </h4>
                <p style={{display:'inline',marginLeft:'3rem',color:'grey'}}>{el.text}</p>
            </span>
        </div>)}
        <form onSubmit={handleSubmit} className="message-form d-flex">
            <input
             type="text" 
             placeholder="new message"
             onChange={(e) => setNewMessage(e.target.value)}
             value={newMessage}
             />
            <Button variant="primary" type="submit" >Send</Button>
        </form>
    </div>
  )
}

export default Chat