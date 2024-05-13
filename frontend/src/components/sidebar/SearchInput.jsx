import React, {useState} from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useAuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
const SearchInput = () => {
  const {authUser} = useAuthContext();
  const [search , setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error("Search term must be at least 3 characters long")
    }
    const conversation = conversations.find(conversation => conversation.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");

    }
    else {
      return toast.error("No user found!");
    }
  }
  //
  return (
    <form className = "flex items-center gap-2" onSubmit = {handleSubmit}>
        <input type = "text" value = {search} onChange = {(e) => setSearch(e.target.value)} placeholder = {`Hello, ${authUser.username}.`} className = "input input-bordered rounded-full bg-[#171717]"/>
        <button type = "submit" className = "btn btn-circle bg-[#171717] text-white ">
        <IoSearchSharp className = " w-6 h-6 " />
        </button>
    </form>
  )
}

export default SearchInput