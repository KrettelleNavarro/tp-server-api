const express = require ('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
 
router.get('/users',userCtrl.getUsers );
router.get('/users/:id', userCtrl.getUser );

module.exports = router;