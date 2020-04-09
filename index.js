
const app = require('./app');
const PORT = process.env.PORT || 3000;

const mongoose = require ('mongoose');
const DB_USER = 'api-rest-social';
const DB_PWD = 'Titi98';
const DB_HOST = 'cluster0-dixr6.mongodb.net';
const DB_NAME = 'social_network';

const dbUrl = `mongodb+srv://${DB_USER}:${DB_PWD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

//mongodb+srv://<username>:<password>@cluster0-dixr6.mongodb.net/test?retryWrites=true&w=majority

//Connection à la BDD
mongoose.connect(dbUrl, {useNewUrlParser:true, useUnifiedTopology:true}, () =>{
  console.log(`conneexion à la bdd ${DB_NAME} ok.`)
} )

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
