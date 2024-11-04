const ProductService = require('../services/products.services');
// Traer también datos de providers para hacer los populates
const Provider = require('../models/providers.model');

// READ
// [GET] http://localhost:3000/api/products/id
const getProduct = async (req, res) => {
    try {
        let product = await ProductService.getProduct(req.params.id);

        res.status(200).json(product); // Respuesta de la API para 1 producto
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}


// // CREATE
// // [POST] http://localhost:3000/api/products
// // Se envía en el body los datos del producto a crear y retorna un status 201. Payload {message: "producto creado",product:{datos_del_producto_creado}. Primero tendréis que traer los datos del proveedor para obtener el ID_provider. Después se podrá crear el producto.
const createProduct = async (req, res) => {
    try {
        let data = req.body;
        let answer = await ProductService.createProduct(data);
        res.status(201).json({
            message: "producto creado",
            data: answer
        });

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// UPATE
const editProduct = async (req, res) => {
    try {
        let updatedProduct = await ProductService.editProduct(req.params.id, req.body); 
        if(updatedProduct) {
            res.status(200).json({
                message: `Producto actualizado: ${updatedProduct.title}`,
                data: updatedProduct
            });
        }

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// DELETE
const deleteProduct = async (req, res) => {
    try {
        let deletedProduct = await ProductService.deleteProduct(req.params.id, req.body); 
        if(deletedProduct) {
            res.status(200).json({
                message: `Producto borrado: ${deletedProduct.title}`,
                data: deletedProduct
            });
        }

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

module.exports = {
    createProduct,
    getProduct,
    editProduct,
    deleteProduct
}

// // PRUEBAS CREAR PRODUCTO
// let newProduct = {
//     title: "Prueba",
//     price: "Prueba",
//     description: "Prueba",
//     image: "Prueba",
//     provider: "Café Papá Pitufo"
// }

// createProduct(newProduct);
