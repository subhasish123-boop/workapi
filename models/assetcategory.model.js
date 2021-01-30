const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssetcategorySchema = new Schema({
    categoryName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: Number, default: 0 },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true, enum: [true, false] },
});

module.exports = mongoose.model('Assetcategory', AssetcategorySchema);