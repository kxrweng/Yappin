import toast from "react-hot-toast";
import axios from "axios";
import react, {useState} from 'react';
import { useAuthContext } from "../context/AuthContext";

const useLogin =  () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async (username, password) =>{
        const success = handleInputErrors(username, password)
        if(!success){
            return;
        }
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {username, password}, {withCredentials: true});
    
            console.log("User logged in successfully!", res);
            localStorage.setItem("chat-user", JSON.stringify(res.data));

            setAuthUser(res.data);
    
        } catch (error) {
            toast.error(error.message);
        }
    
        finally{
            setLoading(false);
        }
    }
    

    return {loading, login};
}

export default useLogin;

function handleInputErrors( username, password){
    if(!username || !password  ){
        toast.error("Please fill all the fields")
        return false;
    }


    return true;
}