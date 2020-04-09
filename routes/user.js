const express = require ('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
 
router.get('/api/users',userCtrl.getUsers );
 
router.get('/api/users/:id', userCtrl.getUser );

module.exports = router;