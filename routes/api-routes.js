// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({status: 'API Its Working', message: 'Welcome to RESTHub crafted with love!'});
});
// Import contact controller
var contactController = require('../controller/contactController');
// Contact routes
router.route('/contacts').get(contactController.contacts)
router.route('/contacts').post(contactController.new);

// contact_id update
router.route('/contacts/:contact_id').get(contactController.view)
router.route('/contacts/:contact_id').patch(contactController.update)
router.route('/contacts/:contact_id').put(contactController.update)
router.route('/contacts/:contact_id').delete(contactController.delete);
// Export API routes
module.exports = router;
