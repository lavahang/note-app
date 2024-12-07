import express from 'express'
import User from '../models/Users.js'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/register', async (req, res) => {
    try{
        const {name,email,password}=req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(401).json({success: false, message: "User already exist"})
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,email,password: hashPassword
        })

        await newUser.save()
        return res.status(200).json({success:true, message:"Account created successfully"})

    }
    catch(error){

        return res.status(500).json({ success:false, message:"Error in adding user"})
    }


  })


  export default router