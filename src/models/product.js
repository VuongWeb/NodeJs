import mongoose from "mongoose";
const { ObjectId } = mongoose.Types

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true} )



export default mongoose.model('Product', productSchema);