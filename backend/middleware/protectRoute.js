import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const protectRoute = async (req,res,next) => {
    try {
        console.log(req.cookies)
        const token = req.cookies.jwt;
        console.log("Trying to print token",token);
        if(!token){
            return res.status(400).json({error : "Unauthorized - No Token Provided!"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        if(!decoded){
            return res.status(400).json({error : "Unauthorized - Token Verification Failed!"})
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(400).json({error : "Unauthorized - No User Found!"})
        }
        req.user = user;

        next();


    } catch (error) {
        console.log("Error in Protect Route Middleware", error.message)
        return res.status(500).json({message:"Internal Server Error"})
    }
}
export default protectRoute;