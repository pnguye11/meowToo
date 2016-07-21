var express = require('express'),
    router  = express.Router();


var ProductsCtlr = require('../controllers/productCtlr'),
    AdminCtlr    = require('../controllers/adminCtlr'),
    AuthsCtrl    = require('../controllers/auths');


router.post('/login',                               AuthsCtrl.adminAuth);
router.post('/admins',                              AdminCtlr.userCreate);
router.get('/users/:id',                            AdminCtlr.userShow);



router.get('/products/:id',    AuthsCtrl.tokenVerify, ProductsCtlr.productShow);
router.get('/products',        AuthsCtrl.tokenVerify, ProductsCtlr.productIndex);
router.post('/products',       AuthsCtrl.tokenVerify, ProductsCtlr.productCreate);
router.put('/products/:id',    AuthsCtrl.tokenVerify, ProductsCtlr.productUpdate);
router.delete('/products/:id', AuthsCtrl.tokenVerify, ProductsCtlr.productDelete);


module.exports = router;
