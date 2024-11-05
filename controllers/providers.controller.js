const ProviderService = require('../services/providers.services')

// READ
// [GET] TODOS http://localhost:3000/api/providers Retorna un objeto con los datos de todos los providers. Retorna un status 200.
const getProvider = async (req, res) => {
    try {
        let providers = await ProviderService.getProvider(); //{}
        res.status(200).json(providers); // Respuesta de la API para todos los providers
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// CREATE
// [POST] http://localhost:3000/api/providers + body {companyName, website, image}
// Se envía en el body los datos del proveedor a crear y retorna un status 201. Payload {message: "proveedor creado", provider:{datos_del_proveedor_creado}}.
const createProvider = async (req, res) => {
    try {
        let answer = await ProviderService.createProvider(req.body); // {companyName, website, image}
        res.status(201).json({
            message: "proveedor creado",
            provider: answer
        });

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}


// UPATE
// [PUT] http://localhost:3000/api/providers Se envía en el body los datos del proveedor a editar y retorna un status 200. Payload {message: "proveedor actualizado: Adidas", provider:{datos_del_proveedor_editado}}.
const editProvider = async (req, res) => {
    try {
        let updatedProvider = await ProviderService.editProvider(req.params.id, req.body); 
        if(updatedProvider) {
            res.status(200).json({
                message: `Proveedor actualizado: ${updatedProvider.companyName}`,
                data: updatedProvider
            });
        }
        
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// DELETE
// [DELETE] http://localhost:3000/api/providers 
// Se envía en el body el título del proveedor a borrar y retorna un status 200. Payload {message: "Se ha borrado el proveedor: Nintendo"}.
const deleteProvider = async(req, res) => {
    try {
        let deletedProvider = await ProviderService.deleteProvider(req.params.id);
        if(deletedProvider) {
            res.status(200).json({
                message: 'Proveedor borrado.',
                data: deletedProvider
            });
        }

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

module.exports = {
    getProvider,
    createProvider,
    editProvider,
    deleteProvider
}