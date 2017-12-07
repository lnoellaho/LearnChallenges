// Story: As a programmer, I can make a car.
// Hint: Create a class called Car, and create a variable called myCar which contains an object of class Car.
// Made up car years because of made up cars (TATA?)
class Car {
  constructor() {
    this.wheels = 4,
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

}

class Tesla extends Car {
  constructor() {
    super (),
    this.modelYear =3000
  }
  acceleration () {
     this.speed += 10 }
  brake () {
    this.speed -= 7 }
  carInfo() {
    return
  }
  }

class Tata extends Car {
  constructor() {
    super(),
    this.modelYear =5
  }
  acceleration () {
    this.speed += 2
  }
  brake () {
    this.speed -= 1.25
  }
}

class Toyota extends Car {
  constructor() {
    super(),
    this.modelYear =2015
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





// Story: As a programmer, I can call upon a car to tell me all it's information.
// Hint: Implement carInfo method on one or more classes. You can call a super class's carInfo with super.
//
// Story: As a programmer, I can keep a collection of two of each kind of vehicle, all from different years.
// Hint: Create two of each vehicles, all from different model years, and put them into an Array.
//
// Story: As a programmer, I can sort my collection of cars based on model year.
//
// Story: As a programmer, I can sort my collection of cars based on model.
// Hint: Sort based on class name.
//
// Story: As a programmer, I can sort my collection of cars based on model and then year.
