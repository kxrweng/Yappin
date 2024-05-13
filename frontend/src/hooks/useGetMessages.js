import React, { useState,useEffect } from 'react'
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation';
import axios from 'axios';
function useGetMessages() {
    const [loading,setLoading] = useState(false)
    const {messages, setMessages, selectedConversation} = useConversation();
    console.log(selectedConversation._id);

    useEffect( () => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`http://localhost:5000/api/messages/${selectedConversation._id}`, {withCredentials: true})
                setMessages(res.data);
            } catch (error) {
                toast.error("Failed to get messages", error.message)
                console.log(error.message);
            }
            finally{
                setLoading(false);
            }
        }
        if(selectedConversation?._id){
            getMessages();
        }
    }, [selectedConversation?._id, setMessages])

    return {messages,loading};
 
}

export default useGetMessages