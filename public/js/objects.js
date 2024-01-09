/*0-Create a car object making the abstraction of its attributes and a nested object.*/

const car = {
    brand: "Fiat",
    doors: 3,
    equipment: {
        AC: true,
        bluetooth: true,
        sunroof: false,
        "heated seats": false
    }
};

/*1-Create a function that returns the brand of the car. You must print the result on the browser screen and the console.*/

function brandCar () {
    return car.brand;
}

console.log(brandCar());

const answer1 = document.getElementById('answer-1');
answer1.innerHTML = brandCar();

/*2-Create a function that returns the number of doors of the car. You must print the result on the browser screen and the console.*/

function doorsCar () {
    return car.doors;
}

console.log(doorsCar());

const answer2 = document.getElementById('answer-2');
answer2.innerHTML = doorsCar();

/*3-Create a function that returns an attribute of the nested object. You must print the result on the browser screen and the console.*/

function hasSunroof () {
    return car.equipment.sunroof;
}

console.log(hasSunroof());

const answer3 = document.getElementById('answer-3');
answer3.innerHTML = hasSunroof();