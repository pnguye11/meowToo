var express = require('express'),
    router  = express.Router();

///required controllers
var ProductsCtlr = require('../controllers/productCtlr'),
    AdminCtlr    = require('../controllers/adminCtlr'),
    AuthsCtrl    = require('../controllers/auths');

//// users routes
router.post('/login',                               AuthsCtrl.adminAuth);
router.post('/admins',                              AdminCtlr.userCreate);
router.get('/users/:id',                            AdminCtlr.userShow);


////product routes
router.get('/products/',                              ProductsCtlr.productShow);
router.get('/products',                               ProductsCtlr.productsIndex);
router.post('/products',       AuthsCtrl.tokenVerify, ProductsCtlr.productCreate);
router.put('/products/:id',    AuthsCtrl.tokenVerify, ProductsCtlr.productUpdate);
router.delete('/products/:id', AuthsCtrl.tokenVerify, ProductsCtlr.productDelete);


module.exports = router;
