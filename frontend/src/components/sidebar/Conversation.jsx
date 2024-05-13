import React from 'react'
import useConversation from '../../zustand/useConversation'
const Conversation = ({conversation,lastIdx,emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
    <div key = {conversation._id} onClick = {() => setSelectedConversation(conversation)} className={`${isSelected ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" : ""} flex gap-2 items-center hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded p-2 py-1 cursor-pointer`}>
        <div className = 'avatar online'>
            <div className = "w-12 rounded-full">
                <img src= {conversation.profilePic} alt = 'user avatar'
                />
            </div>
        </div>
        <div className = "flex flex-col flex-1">
            <div className = "flex gap-3 justify-between">
                <p className = "font-bold text-white">{conversation.fullName}</p>
                <span className = "text-xl">{emoji}</span>
            </div>
            </div>
    </div>
      {lastIdx ? null : <div className = "divider my-0 py-0 h-1"/>
      }
    
    </>
  )
}

export default Conversation