//server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
let app = express();
let teamCreationStatus = false;

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../../build')));
app.use(express.static(path.join('public')));
app.get('/', (req, res) => {
  res.send('Express server is up and running.');
})

//GET request to server
app.get('/api', (req, res) => {

});

app.get('/team-standings', (req, res) => {
  res.send(require('./teamStandings.json'));
});

app.get('/fixtures/', (req, res) => {
  var gameWeek = req.query.gameweek;
  var jsonFileName = "./fixtures.game-week-" + gameWeek + ".json";
  res.send(require(jsonFileName));
});

app.get('/player-statistics', (req, res) => {
  res.send(require('./playerStatistics.json'));
});

app.get('/getPlayerDetails/:playerName', (req, res) => {
  const playersData = require('./playerDetails.json');
  playersData.forEach(function (item, index) {
    if (item[req.params.playerName]) {
      res.send(item[req.params.playerName]);
    }
  });
});

//POST request to server
app.post('/team/status', (req, res) => {
  teamCreationStatus = true;
  res.send("success")
})

app.get('/team/status', (req, res) => {
  res.send("{" + "\"teamCreationStatus\"" + ":" + teamCreationStatus + "}");
});

//DELETE request to server
app.delete('/api', (req, res) => {

})

//PUT request to server
app.put('/api', (req, res) => {

});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
});

app.listen(port, _ => console.log(`The server is listening on port ${port}`));
