//Week 1 Day 4 Leeann and Erika
/*
var myCar = {
  year: 2018,
  make: "Lotus",
  color: "matte black",
  getData: function() {
    return "I have a " + this.year + " " + this.make + " in " + this.color },

   };

myCar.getData();

/* creating first car and calling getData
var car1 = createCarObject(2018, "Lotus", "yellow")

car1.getData()
*/



//story 1 and story 2
function createCarObject(modelYear, carMake, carColor) {
  return {
    year: modelYear,
    make: carMake,
    color: carColor,
    getData: function() {
      return "I have a " + this.year + " " + this.make + " in " + this.color
    },
    carSpeed: function() {
      var speed = 200;
      return {
        getSpeed: function() {return speed; },
        accelerate: function() {speed + 10;},
        brake: function() {speed -7}
      };
    }
  };
}
/* creating first car and calling getData
var car1 = createCarObject(2018, "Lotus", "yellow")

call car1.carSpeed().getSpeed()
200
*/

//Story 3
/*
attempt #1
function createCarObject(modelYear, carMake, carColor) {
  return {
    year: modelYear,
    make: carMake,
    color: carColor,
    getData: function() {
      return "I have a " + this.year + " " + this.make + " in " + this.color
    },
    carSpeed: function() {
      var speed = 50; //must be moved out of carSpeed. Everytime we call carSpeed, speed will reset to 50.
      return {
        getSpeed: function() {return speed; },
        accelerate: function() {
            while (speed <= 70) {
                var newSpeed =speed + 10;
                speed = newSpeed;
                return speed}}, //return will end loop
        brake: function() {speed -7}
      };
    }
  };
}

*/
//possible solution
//Story 3
function createCarObject(modelYear, carMake, carColor) {
    var speed = 50;
  return {
    year: modelYear,
    make: carMake,
    color: carColor,
    getData: function() {
      return "I have a " + this.year + " " + this.make + " in " + this.color
    },
    carSpeed: function() {
      return {
        getSpeed: function() {return speed; },
        accelerate: function() {
            while (speed < 70) {
                var newSpeed = speed + 10;
                speed = newSpeed;
                console.log(speed);
            }},
        brake: function() {
            while (speed >= 7) {
                var newSpeed = speed - 7;
                speed = newSpeed;
                console.log(speed);
            }
            while (speed > 0) {
                var newSpeed = speed -1;
                speed = newSpeed;
                console.log(speed);
            }}
      };
    }
  };
}

//optimized correct solution
function createCarObject(modelYear, carMake, carColor, startSpeed) {
    var speed = startSpeed;
  return {
    year: modelYear,
    make: carMake,
    color: carColor,
    getData: function() {
      return "I have a " + this.year + " " + this.make + " in " + this.color
    },
    carSpeed: function() {
      return {
        getSpeed: function() {console.log(speed); },
        accelerate: function(maxSpeed) {
            while (speed < maxSpeed) {
                var newSpeed = speed + 1;
                speed = newSpeed;
                //console.log(speed);
            }},
        brake: function(minSpeed) {
            while (speed > minSpeed) {
                var newSpeed = speed -1;
                speed = newSpeed;
                //console.log(speed);
            }}
      };
    }
  };
}

//var car1 = createCarObject(2018, "Lotus", "yellow", 50)
//car1.carSpeed().brake(0)
//car1.carSpeed().getSpeed()

//Story 4
function createCarObject(modelYear, carMake, carColor, startSpeed) {
    var speed = startSpeed;
  return {
    year: modelYear,
    make: carMake,
    color: carColor,
    getData: function() {
      return "I have a " + this.year + " " + this.make + " in " + this.color
    },
    carSpeed: function() {
      return {
        getSpeed: function() {console.log(speed); },
        accelerate: function(maxSpeed) {
            while (speed < maxSpeed) {
                var newSpeed = speed + 10;
                speed = newSpeed;
                //console.log(speed);
            }},
        brake: function(minSpeed) {
            while (speed > minSpeed) {
                var newSpeed = speed -7;
                speed = newSpeed;
                //console.log(speed);
            }}
      };
    }
  };
}
