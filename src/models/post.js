import mongoose from "mongoose";

const postSchema =mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
    
},{timetamps:true})
export default mongoose.model('Post',postSchema);