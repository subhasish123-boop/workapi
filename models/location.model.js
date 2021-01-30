const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    locationName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: Number, default: 1, required: true },
    updatedAt: { type: Date, default: '' },
    updatedBy: { type: Number },
    isActive: { type: Boolean, default: true, enum: [true, false] },
});

module.exports = mongoose.model('Location', LocationSchema);