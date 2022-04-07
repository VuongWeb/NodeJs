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

// export const 
