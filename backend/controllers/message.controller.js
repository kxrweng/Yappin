import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res) => {
    console.log(req);
    try {
        
        const {message} = req.body;
        const {id:receiverId} = req.params
        const senderId = req.user._id;
       
        let conversation = await Conversation.findOne({
            participants : {$all : [senderId,receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants : [senderId,receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        //SocketIO here

        // await conversation.save()
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]) //Runs in parallel
        return res.status(201).json(newMessage);


    } catch (error) {
        console.log("Error in sendMessage Controller", error.message)   
        return res.status(500).json({error : "Internal Server Error!"})
    }
}

export const getMessages = async(req,res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants : {$all : [senderId,userToChatId]}
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);
        }

        const messages = conversation.messages;
        return res.status(200).json(messages);

        

    } catch (error) {
        console.log("Error in getMessages Controller", error.message)
        return res.status(500).json({error : "Internal Server Error"})
    }
}