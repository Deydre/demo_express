const ProductModel = require('../models/products.model');

// OK ----------
const getProduct = async (id) => {
    return id 
    ? await ProductModel.find({id},'-_id -__v').populate('provider', '-_id -__v') 
    : await ProductModel.find({},'-_id -__v').populate('provider', '-_id -__v'); //{}

};

// OK ----------
// Por body: {companyName, website, image}
const createProduct = async (datosProvider) => {
    const product = new ProductModel(datosProvider);
    return await product.save();
};

// OK ----------
const editProduct = async (id, data) => {
    return await ProductModel.findByIdAndUpdate(id, data, { new: true });
};

// OK ----------
const deleteProduct = async (id) => {
    return await ProductModel.findByIdAndDelete(id);
};

module.exports = {
    getProduct,
    createProduct,
    editProduct,
    deleteProduct
};