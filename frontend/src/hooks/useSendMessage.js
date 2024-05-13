import React, {useState} from 'react'
import useConversation from '../zustand/useConversation'
import axios from 'axios';
import toast from 'react-hot-toast';
const useSendMessage = () => {

    const [loading,setLoading] = useState(false)
    const {messages, setMessages,selectedConversation} = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            console.log(selectedConversation);
            console.log(message);
            const res = await axios.post(`http://localhost:5000/api/messages/send/${selectedConversation._id}`,  {message}, {withCredentials : true})
            console.log(res.data.message);
            setMessages([...messages, res.data]);
        } catch (error) {
            toast.error("Failed to send message")
        }
        finally{
            setLoading(false);
        }
    }
    return {sendMessage, loading};

}

export default useSendMessage