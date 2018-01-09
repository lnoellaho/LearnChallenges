var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
var port = process.argv[2]

var questions = {
  'coronado-bridge':{
    question: "Who was the first person to ever drive over the Coronado bridge?",
    answer: "Ronald Reagan",
    image: "/images/coronado_bridge.png"
  },
  'hotel-del':{
    question: "What is the largest wooden structure in the United States?  (Hint, its located in San Diego)",
    answer: "Hotel Del Coronado",
    image: "/images/hotel-del.jpeg"
  },
  'san-diego-county-fair':{
    question: "What was the original name of the San Diego County Fair?",
    answer: "Del Mar Fair",
    image: "/images/sandiego-county-fair.jpg"
  },
  'mission-bay':{
    question: "How many visitors come to Mission Bay Park every year?",
    answer: "More than 5 million",
    image: "/images/misson-bay.jpeg"
  },
  'la-jolla-playhouse':{
    question: "What famous actor founded the La Jolla Playhouse?",
    answer: "Gregory Peck",
    image: "/images/la-jolla-playhouse.jpeg"
  }
};

app.get('/', function (request, response) {
  response.render('index', {'questions': questions});
});

app.get('/trivia/:question', function(request, response){
  var questionKey = request.params.question;
  var triviaQuestion = questions[questionKey];
  response.render('trivia', {'question': triviaQuestion.question, 'answer': triviaQuestion.answer, 'image': triviaQuestion.image});
});

app.listen(process.argv[2], function(){
  console.log("Example app listening on port 3000");
})
