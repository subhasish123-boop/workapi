const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-double')(mongoose);

const AssetSchema = new Schema({
  assetCategoryId: { type: Schema.Types.ObjectId, ref: 'AssetCategory', required: true },
  assetTypeId: { type: Schema.Types.ObjectId, ref: 'AssetType', required: true },
  leaseId: { type: Schema.Types.ObjectId, ref: 'Lease', default: null },
  locationId: { type: Schema.Types.ObjectId, ref: 'Location', default: null },
  depotId: { type: Schema.Types.ObjectId, ref: 'Depot', required: true },
  assetStatusId: { type: Schema.Types.ObjectId, ref: 'AssetStatus', required: true },
  assetNumber: { type: String, required: true, unique: true },
  manufacturerName: { type: String, required: true },
  manufacturerSerialNo: { type: String, required: true },
  buildYear: { type: Number, required: true },
  grossWeight: { type: Schema.Types.Double, required: true },
  tareWeight: { type: Schema.Types.Double, required: true },
  netWeight: { type: Schema.Types.Double, default: 0.00 },
  ownershipType: { type: String, required: true },
  ownershipDate: { type: Date, required: true },
  assetImages: { type: String, default: '' },
  assetCertificates: { type: String, default: '' },
  firstHydroTestDate: { type: Date, required: true },
  lastHydroTestDate: { type: Date, required: true },
  nextTestDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: Number, default: 1, required: true },
  updatedAt: { type: Date, default: '' },
  updatedBy: { type: Number },
  isActive: { type: Boolean, default: true, enum: [true, false] },
});

module.exports = mongoose.model('Asset', AssetSchema);