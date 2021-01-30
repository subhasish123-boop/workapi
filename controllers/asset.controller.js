const mongoose = require('mongoose');
const Asset = require('../models/asset.model');
const Assetcategory = require('../models/assetcategory.model');
const Assettype = require('../models/assettype.model');
const Lease = require('../models/lease.model');
const Location = require('../models/location.model');
const Depot = require('../models/depot.model');
const Assetstatus = require('../models/assetstatus.model');


class AssetController {
    constructor() {
    }

    async testpayload(req, res) {
        try {
            let assetCategory = await Assetcategory.findOne({ 'isActive': true }).exec();
            let assetType = Assettype.findOne({ 'isActive': true }).exec();
            let lease = Lease.findOne({ 'isActive': true }).exec();
            let location = Location.findOne({ 'isActive': true }).exec();
            let depot = Depot.findOne({ 'isActive': true }).exec();
            let assetStatus = Assetstatus.findOne({ 'isActive': true }).exec();

            var payloadData = req.body;
            var validatedData = []
            var rejectionData = []

            payloadData.map(async (item) => {

                /* let doesExistCategoryId = await Assetcategory.exists({ _id: mongoose.Types.ObjectId(item.assetCategoryId) });*/

                if (assetCategory._id.toString() == item.assetCategoryId.toString()) {
                    validatedData.push(item)
                }
                else {
                    rejectionData.push(item)
                }

                if (assetType._id.toString() == item.assetTypeId.toString()) {
                    validatedData.push(item)
                }
                else {
                    rejectionData.push(item)
                }

                if (lease._id.toString() == item.leaseId.toString()) {
                    validatedData.push(item)
                }
                else {
                    rejectionData.push(item)
                }

                if (location._id.toString() == item.locationId.toString()) {
                    validatedData.push(item)
                }
                else {
                    rejectionData.push(item)
                }

                if (depot._id.toString() == item.depotId.toString()) {
                    validatedData.push(item)
                }
                else {
                    rejectionData.push(item)
                }

                if (assetStatus._id.toString() == item.assetStatusId.toString()) {
                    validatedData.push(item)
                }
                else {
                    rejectionData.push(item)
                }
            })


            let totalData = payloadData.length
            let rejectionDataLength = rejectionData.length
            let validatedDataLength = validatedData.length

            res.status(200).send({ message: "data fetched", data: { "totalData": totalData, "rejectionDataLength": rejectionDataLength, "validatedDataLength": validatedDataLength, "rejectionData": rejectionData, validatedData: validatedData } });

        }
        catch (e) {
            console.log(e)
            res.status(500).send({ message: error.message });
        }
    }
}
module.exports = new AssetController();