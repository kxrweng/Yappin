import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import {useState} from 'react'
import axios from "axios";

const useLogout = () => {
    const [loading , setLoading] = useState(false);
    const {authUser, setAuthUser} = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try{
            const res = await axios.post("http://localhost:5000/api/auth/logout");
            console.log(res);

            localStorage.removeItem("chat-user");
            setAuthUser(null);

        }
        catch(error){
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
    }
    return {loading, logout};

}
export default useLogout;