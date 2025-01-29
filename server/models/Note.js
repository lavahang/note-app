import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

// const NoteSchema = new mongoose.Schema({
//     heading: { type: String, required: true},
//     desc: {type: String, required: true},
//     id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
// });

const Note = mongoose.model('Note', NoteSchema); //database name 'Note' le dincha
export default Note
