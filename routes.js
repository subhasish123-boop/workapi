let router = require('express').Router()
// Import asset controller
var assetController = require('./controllers/asset.controller');

router.route('/asset/test').post(assetController.testpayload);

// Export API routes
module.exports = router;