import React, {useState} from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';


const useSignup = () => {
    const [loading,setLoading] = useState(false);
    const { setAuthUser} = useAuthContext();
    
    const signup = async({fullName, username, password,confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, password,confirmPassword, gender})
        if(!success){
            return;
        }

        setLoading(true);
        try {
        const res = await axios.post("http://localhost:5000/api/auth/signup", {fullName, username,password,confirmPassword, gender}, { withCredentials: true });
        console.log("User signed up successfully !", res);
        
        localStorage.setItem("chat-user",JSON.stringify(res.data))
        setAuthUser(res.data);

        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        
        }
        
    }
    return {loading,signup}
 
}

export default useSignup

function handleInputErrors({fullName, username, password,confirmPassword}){
    if(!fullName || !username || !password || !confirmPassword ){
        toast.error("Please fill all the fields")
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Passwords do not match")
        return false;
    }

    if(password.length < 6){
        toast.error("Password should be atleast 6 characters long")
        return false;
    }

    return true;
}
