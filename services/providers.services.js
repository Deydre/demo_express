const ProviderModel = require('../models/providers.model');

// OK ----------
const getProvider = async () => {
    return await ProviderModel.find();
};

// OK ----------
// Por body: {companyName, website, image}
const createProvider = async (datosProvider) => {
    const provider = new ProviderModel(datosProvider);
    return await provider.save();
};

// OK ----------
const editProvider = async (id, data) => {
    return await ProviderModel.findByIdAndUpdate(id, data, { new: true });
};

// OK ----------
const deleteProvider = async (id) => {
    return await ProviderModel.findByIdAndDelete(id);
};

module.exports = {
    getProvider,
    createProvider,
    editProvider,
    deleteProvider
};