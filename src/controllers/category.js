import Category from '../models/category'
import slugify from 'slugify';



export const create = async (req, res) => { // create product
    req.body.slug = slugify(req.body.name);
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
export const read = async (req, res) => { // get all
    try {
        const category = await Category.findOne({slug: req.params.slug}).exec();
        const products = await Product.find({category: category}).populate('category').select('-category').exec()
        console.log('products', products);
        res.json({
            category, products
        });    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi"
        })
    }
  }