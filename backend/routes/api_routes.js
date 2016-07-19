var express = require('express'),
    router  = express.Router();


var ProductsCtlr = require('../controllers/productCtlr'),
    AdminCtlr    = require('../controllers/adminCtlr'),
    AuthsCtrl    = require('../controllers/auths');


router.post('/login',                               AuthsCtrl.adminAuth);
router.post('/admins',                              AdminCtlr.userCreate);
router.get('/users/:id',                            AdminCtlr.userShow);


//||||||||||||||||||||||||||--
// Products CRUD SERVICES
//||||||||||||||||||||||||||--
// router.get('/products/:id',    AuthsCtrl.tokenVerify, ProductsCtrl.productsShow);
// router.get('/products',        AuthsCtrl.tokenVerify, ProductsCtrl.productsIndex);
// router.post('/products',       AuthsCtrl.tokenVerify, ProductsCtrl.productsCreate);
// router.put('/products/:id',    AuthsCtrl.tokenVerify, ProductsCtrl.productsUpdate);
// router.delete('/products/:id', AuthsCtrl.tokenVerify, ProductsCtrl.productsDelete);

module.exports = router;
