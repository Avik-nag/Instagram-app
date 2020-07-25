const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,  //url of photo will be stored in a string
        required:true
    },
    postedBy:{
        type:ObjectId,  // ObjectId = ID of "User" to be stored on mongodb
        ref:"User"
    }
})

mongoose.model("Post",postSchema)