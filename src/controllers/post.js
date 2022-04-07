import Post from "../models/post";

export const create =  async (req,res)=>{
    try {
        const post = await new Post(req.body).save();
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"Thêm bài viết không thành công !"
        })
    }
}

export const list = async (req,res) =>{
    try {
        const posts = await Post.find().exec();
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message:"không lấy được danh sách bài viết"
        })
    }
}

export const remove = async (req,res) =>{
    try {
        const post = await Post.findOneAndDelete({_id:req.params.id}).exec();
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message:"không lấy được danh sách bài viết"
        })
    }
}

export const update = async (req,res) =>{
    const condition = {_id:req.params.id};
    const update = req.body;
    const optinal = { new :true }
    try {
        const post = await Post.findOneAndUpdate(condition,update,optinal).exec();
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message:"không lấy được danh sách bài viết"
        })
    }
}