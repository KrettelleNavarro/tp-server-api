const User = require('../models/user');

function getUsers(req,res){
    const users = require('../fixtures');
    res.status(200).json({ users });
}
function getUser(req, res){
    const userId = req.params.id;

    User.findById(userId, (err, user) =>{
        if(err || !user) {
            return res.status(404).send({
                message: " l'utilisateur n'existe pas"
            });
        }
        res.status(200).json({ user });
    });
    
}
 

module.exports  = {
    getUsers,
    getUser,
}