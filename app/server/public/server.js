//server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
let app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../../build')));

app.get('/', (req, res)=> {
  res.send('Express server is up and running.');
})

//GET request to server
app.get('/api', (req, res)=> {
  
});

app.get('/team-standings', (req, res)=> {
    res.send(require('./teamStandings.json'));
});

app.get('/fixtures/', (req, res)=> {
  var gameWeek = req.query.gameweek;
  var jsonFileName = "./fixtures.game-week-" + gameWeek + ".json"
  console.log(gameWeek)
  res.send(require(jsonFileName));
});

//POST request to server
app.post('/api', (req, res)=> {

})

//DELETE request to server
app.delete('/api', (req, res)=> {
  
})

//PUT request to server
app.put('/api', (req, res)=> {
  
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
});

app.listen(port, _=> console.log(`The server is listening on port ${port}`));