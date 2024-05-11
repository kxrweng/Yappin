import React, {useState} from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

const useSignup = () => {
    const [loading,setLoading] = useState(false);
    
    const signup = async({fullName, username, password,confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, password,confirmPassword, gender})
        if(!success){
            return;
        }

        setLoading(true);
        try {
        const res = await axios.post("http://localhost:5000/api/auth/signup", {fullName, username,password,confirmPassword, gender});
        console.log(res);


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
