const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaseSchema = new Schema({
    leaseNumber: { type: String, required: true },
    leaseReferenceNo: { type: String, required: true },
    leaseCompany: { type: String, required: true },
    leaseStartDate: { type: Date, required: true },
    leaseEndDate: { type: Date, required: true },
    leaseRate: { type: Schema.Types.Double, required: true },
    currencyId: { type: Schema.Types.ObjectId, ref: 'Currency', required: true },
    leaseCost: { type: Schema.Types.Double, required: true },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: Number, default: 1, required: true },
    updatedAt: { type: Date, default: '' },
    updatedBy: { type: Number },
    isActive: { type: Boolean, default: true, enum: [true, false] },
});

module.exports = mongoose.model('Lease', LeaseSchema);