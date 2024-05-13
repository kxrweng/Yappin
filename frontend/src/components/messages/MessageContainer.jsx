import React, {useEffect} from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { AuthContext, useAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {
  const noChatSelected = false;
  const {selectedConversation, setSelectedConversation} = useConversation();
  // const {authUser,setAuthUser} = useAuthContext();
  useEffect( () => {
    //Cleanup Function (Unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  

  return (
    
    <div className = "md:min-w-[450px] flex flex-col">
       {!selectedConversation ? <NoChatSelected /> : (
         <>
         {/* <Header /> */}
         <div className = "px-4 py-2 mb-2 bg-[#171717] border-b-purple-700 border-b">
             <span className = "label-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-bold">To : </span> {" "}
             <span className = "text-white font-inter font-semibold">{selectedConversation.fullName}</span>
         </div>
 
         <Messages />
         <MessageInput />
         </>
       )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return(
    <div className = "flex items-center justify-center w-full h-full">
      <div className = "px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser.fullName}!</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className = "text-3xl md:text-6xl text-center" />
      </div>
    </div>
  )

}