//Week 2 Day 4 Leeann and Kate
class Car {
  constructor(year) {
    this.wheels = 4,
    this.modelYear= year,
    this.lights = false,
    this.signal = "off",
    this.speed = 0
  }
  lightsOnOff() {
    if (!this.lights) {
      this.lights = true;
      console.log("lights on");
    } else {
      this.lights = false;
      console.log("lights off");
    }
  }
 signalsOnOff(direction) {
   if (this.signal === "off") {
     this.signal = direction;
     console.log(direction);
   }
 }
 carInfo() {
     return this;
 }
}

class Tesla extends Car {
  constructor(year) {
    super(year)
  }
  acceleration () {
     this.speed += 10 }
  brake () {
    this.speed -= 7 }
}

class Tata extends Car {
  constructor(year) {
    super(year)
  }
  acceleration () {
    this.speed += 2
  }
  brake () {
    this.speed -= 1.25
  }
}

class Toyota extends Car {
  constructor(year) {
    super(year)
}
  acceleration() {
    this.speed += 7
}
  brake() {
    this.speed -= 5
  }
}


var myTata = new Tata()
var myTesla = new Tesla()
var myCar = new Car()
var myToyota = new Toyota()

var carCollection = [];

function addCollection(vehicle) {
    carCollection.push(vehicle.carInfo());
}

var tesla1 = new Tesla(1990)
var tesla2 = new Tesla(1992)
var tata1 = new Tata(2000)
var tata2 = new Tata(1200)
var toyota1 = new Toyota(1300)
var toyota2 = new Toyota(1100)

addCollection(tesla1)
addCollection(tesla2)
addCollection(tata1)
addCollection(tata2)
addCollection(toyota1)
addCollection(toyota2)

carCollection

carCollection.sort(function(a,b) {
    return a.modelYear - b.modelYear
})

carCollection.sort(function(a,b) {
    var nameA = a.toUpperCase();
    var nameB = b.toUpperCase();
    if(nameA < nameB) {
        return -1
    } else if
    (nameA > nameB) {
        return 1
    } else {
        return 0
    }
})

//
// Story: As a programmer, I can sort my collection of cars based on model year.
//
// Story: As a programmer, I can sort my collection of cars based on model.
// Hint: Sort based on class name.
//
// Story: As a programmer, I can sort my collection of cars based on model and then year.
