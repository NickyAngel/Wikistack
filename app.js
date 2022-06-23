const express = require('express');
const app = express();
const morgan = require('morgan');
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views');
const layout = require('./views/layout');
const { db, Page, User } = require('./models');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


app.get('/', (req, res)=>{
    res.send(layout(''))
});

const sync = async ()=>{
   await db.sync({force: true})}

sync();
app.listen(3000);