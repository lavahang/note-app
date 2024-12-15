import express from 'express'
import Note from '../models/Note.js'
import middleware from '../middleware/middleware.js';

const router = express.Router()

router.post('/add',middleware, async (req, res) => {
    try{
        const {title, description}=req.body;
        
        
        const newNote = new Note({
           title,
           description,
           userId: req.user.id,
        });

        await newNote.save()
        return res.status(200).json({success:true, message:"Note created successfully"})

    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({ success:false, message:"Error in adding Note"})
    }

    
})

export default router;