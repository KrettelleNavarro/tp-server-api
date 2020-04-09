
const app = require('./app');
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
const {DB_NAME, DB_HOST, DB_PWD, DB_USER } = process.env;
const dbUrl = `mongodb+srv://${DB_USER}:${DB_PWD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

//mongodb+srv://<username>:<password>@cluster0-dixr6.mongodb.net/test?retryWrites=true&w=majority

//Connection à la BDD
mongoose.connect(dbUrl, {useNewUrlParser:true, useUnifiedTopology:true})
  // , (err) =>{
  // if(!err){
  //   console.log(`connexion à la bdd ${DB_NAME} ok.`)
  // }else{
  //   console.log(err.message)
  // };
  //} )
  // s'écrit aussi avec les promesses de ES6
  .then(() => console.log(`connexion à la bdd ${DB_NAME} ok.`))
  .catch(e => console.log(e));
  

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));

// Cration du Schema
// const Schema = mongoose.Schema;
// const UserSchema = Schema({
//   name: String,
//   age: Number,
//   email: String,
// });

// // creation du model
// const User = mongoose.model('User', UserSchema);
// User.findById('5e8ee96f1c9d4400001d5b5d').then(u => console.log(u));
