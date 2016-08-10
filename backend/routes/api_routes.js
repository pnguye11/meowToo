var express = require('express'),
    router  = express.Router();

var ProductsController = require('../controllers/products'),
    UsersController    = require('../controllers/users');



router.post('/login',                               UsersController.userAuth);
router.post('/users',                               UsersController.userCreate);
router.get('/users/:id',                            UsersController.userShow);



router.get('/products/:id',    UsersController.tokenVerify, ProductsController.productShow);
router.get('/products',                                     ProductsController.productIndex);
router.post('/products',       UsersController.tokenVerify, ProductsController.productCreate);
router.put('/products/:id',    UsersController.tokenVerify, ProductsController.productUpdate);
router.delete('/products/:id', UsersController.tokenVerify, ProductsController.productDelete);


module.exports = router;
