const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepotSchema = new Schema({
    depotName: { type: String, required: true },
    depotCode: { type: String, required: true },
    countryId: { type: Schema.Types.ObjectId, ref: 'Country', required: true },
    locationId: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
    depotManager: { type: String, required: true },
    contactNumber: { type: String, required: true },
    depotAddress: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: Number, default: 1, required: true },
    updatedAt: { type: Date, default: '' },
    updatedBy: { type: Number },
    isActive: { type: Boolean, default: true, enum: [true, false] },
});

module.exports = mongoose.model('Depot', DepotSchema);