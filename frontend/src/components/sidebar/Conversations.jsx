import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';


const Conversations = () => {
  const {loading,conversations} = useGetConversations();
  return (
    <div className = " flex flex-col overflow-auto">
      {conversations.map((conversation,index) => {
        return(
          <Conversation key = {conversation.id}
          conversation = {conversation}
          emoji = {getRandomEmoji()}
          lastIdx = {index === conversations.length - 1}/>
        )
      })}

    </div>
  )
}

export default Conversations