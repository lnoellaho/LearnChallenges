var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var data = require('./data.json')
var app = express();
var port = process.argv[2];


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');



app.get('/', function(request, response){
  response.render('home', {responses: data});
})

app.get('/maketeam', function(request, response) {
  response.render('maketeam')
})

app.post('/teams', function(request,response) {
  let responses = request.body

  var updates = undefined;
  var rawFile = fs.readFileSync('data.json');
  var updates = JSON.parse(rawFile);

  updates.push(responses);

  fs.writeFileSync('data.json', JSON.stringify(updates));

  response.render('teams', {responses: updates})
})

app.listen(process.argv[2], function(){
  console.log('success, port is listening on 3000')
})
