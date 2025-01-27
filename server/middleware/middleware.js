import jwt from 'jsonwebtoken'
// import garda .js pani chutaunu nahune rahecha error auncha
import User from '../models/Users.js'
import 'dotenv/config'

const middleware = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]

        if(!token) {
            return res.status(401).json({success: false, message: "Unauthorized"})
        }

       

        const user = await User.findById({_id: decoded.id})

        if(!user) {
            return res.status(404).json({success: false, message: "no user"})
        }
        const newUser = {name: user.name, id: user._id}
        req.user = newUser
        next()
    }
    catch(error) {
        return res.status(500).json({success: false, message: "please login"})
       // return res.status(500).json({success: false, message: "please login"})
    }
}

export default middleware
