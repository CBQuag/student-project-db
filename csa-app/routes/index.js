var express = require('express');
var router = express.Router();

const { authenticate } = require('../middlewares/auth');

const basketsController=require('../controllers').baskets;
const itemsController=require('../controllers').items;
const ordersController=require('../controllers').orders;
const usersController=require('../controllers').users;

router.get(   '/baskets',     authenticate, basketsController.list);
router.get(   '/baskets/:id', authenticate, basketsController.getById);
router.post(  '/baskets',     authenticate, basketsController.add);
router.put(   '/baskets',     authenticate, basketsController.update);
router.delete('/baskets',     authenticate, basketsController.delete);

router.get(   '/items',       authenticate, itemsController.list);
router.get(   '/items/:id',   authenticate, itemsController.getById);
router.post(  '/items',       authenticate, itemsController.add);
router.put(   '/items',       authenticate, itemsController.update);
router.delete('/items',       authenticate, itemsController.delete);

router.get(   '/orders',      authenticate, ordersController.list);
router.get(   '/orders/:id',  authenticate, ordersController.getById);
router.post(  '/orders',      authenticate, ordersController.add);
router.put(   '/orders',      authenticate, ordersController.update);
router.delete('/orders',      authenticate, ordersController.delete);

router.get(   '/users',       authenticate, usersController.list);
router.get(   '/users/:id',   authenticate, usersController.getById);
router.post(  '/users',       authenticate, usersController.add);
router.put(   '/users',       authenticate, usersController.update);
router.delete('/users',       authenticate, usersController.delete);

module.exports = router;
