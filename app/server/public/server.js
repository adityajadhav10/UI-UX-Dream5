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
app.use(express.static(path.join('public')));
app.get('/', (req, res)=> {
  res.send('Express server is up and running.');
})

//GET request to server
app.get('/api', (req, res)=> {
  
});

app.get('/team-standings', (req, res)=> {
    res.send(require('./teamStandings.json'));
});

app.get('/player-statistics', (req, res)=> {
    res.send(require('./playerStatistics.json'));
});

app.get('/getPlayerDetails/:playerName', (req, res) => {
  const playersData = require('./playerDetails.json');
  console.log('rq === ',req.params.playerName);
  playersData.forEach(function (item, index) {
    console.log("--- ",item[req.params.playerName]);
    if(item[req.params.playerName]) {
      res.send(item[req.params.playerName]);
    }
    // if(item[req.params.playerName] === "vardy") {
    //   console.log("item, index   ",item);
    //   res.send([item]);
    //   //return;
    // }
  });
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