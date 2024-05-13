import React, {useState} from 'react'
import {BsSend} from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage';
// const MessageInput = () => {
//   return (
//     <form className = "px-4 my-3">
//         <div className = "w-full">
//             <input type = "text"
//             className = "border text-sm rounded-lg block w-full p-2.5 bg-[#171717] border-purple-800 text-white"
//             placeholder='Send a message' />
//             <button type = "submit" className = "absolute inset-y-0 end-0 flex items-center pe-3">
//                 <BsSend />
//             </button>
//         </div>
//     </form>
//   )
// }
const MessageInput = () => {
	const [message,setMessage] = useState("");
	const {loading, sendMessage} = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(!message) return;
		await sendMessage(message);
		setMessage("");
	}
	return (
		<form className='px-4 my-3' onSubmit = {(e) => handleSubmit(e)}>
			<div className='w-full relative'>
				<input
					type='text'
					value = {message}
					onChange = {(e) => {
						setMessage(e.target.value)
						console.log(e.target.value);		
					}}
					className='border text-sm rounded-lg block w-full p-2.5  bg-[#171717] border-gray-600 text-white'
					placeholder='Send a message'
				/>
				<button type='submit'  className='absolute inset-y-0 end-0 flex items-center pe-3'>
					{loading ? <div className = "loading loading-spinner" /> : <BsSend />} 
				</button>
			</div>
		</form>
	);
};
export default MessageInput;

// export default MessageInput