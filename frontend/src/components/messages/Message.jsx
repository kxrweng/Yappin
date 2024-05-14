import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/ExtractTime';
const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColour = fromMe ? 'bg-sky-600' : "";
  const formattedTime = extractTime(message.createdAt)

  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className = {`chat ${chatClassName}`}>
        <div className = "chat-image avatar">
            <div className = "w-10 rounded-full">
            <img src= {profilePic} alt = 'user avatar'
                />
            </div>
        </div>
        <div className = {`chat-bubble text-white  ${bubbleBgColour} ${shakeClass} pb-2 `}> 
        {message.message}
        </div>
        <div className = 'chat-footer opacity-50 text-xs flex gap-1 items-center'>
            {formattedTime}
            </div>
    </div>
  )
}

export default Message