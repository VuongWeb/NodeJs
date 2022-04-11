import Category from '../models/category'



export const create = async (req, res) => { // create product
    try {
        const category = await new Category(req.body).save()
        res.json(category);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm danh mục không thành công"
        })
    }
}

export const remove = async (req, res) => { // delete cate
    try {
        const cate = await Category.findOneAndDelete({_id: req.params.id }).exec();
        res.json(cate);    
    } catch (error) {
        res.status(400).json({
            message: "Xóa danh mục không thành công"
        })
    }
}

export const list = async (req, res) => { // get all
    try {
        const categories = await Category.find().exec();
        res.json(categories);    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi"
        })
    }
}
export const read = async (req, res) => {
    const condition = {_id: req.params.id};
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        const products = await Product.find({category}).select('-category').exec();
        res.json({
            category, products
        });
    } catch (error) {
        
    }
}