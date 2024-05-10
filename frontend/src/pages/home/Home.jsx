import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
const Home = () => {
  return (
    <div className = "flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#171717] border-purple-700 border-2 bg-clip-padding">
        <Sidebar />
        <MessageContainer />
    </div>
  )
}

export default Home