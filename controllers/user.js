function getUsers(req,res){
    const users = require('../fixtures');
    res.status(200).json({ users });
}
function getUser(req, res){
    const user = require('../fixtures').users[req.params.id];
    res.status(200).json({ user });
}
 

module.exports  = {
    getUsers,
    getUser,
}