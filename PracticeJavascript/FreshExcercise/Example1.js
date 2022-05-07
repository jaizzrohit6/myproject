//'use strict'
function foo() {
    let x = y = z =0;
    //x=y
    //y=0 global variable
    //z = 0 global 
    x++;
    console.log("x::::::",x)
    y++;
    console.log("y::::::",y)
    return x;
}

console.log(foo(), typeof x, typeof y,typeof z);
console.log(0.1 + 0.2 === 0.3);
let a = 0.1+0.2
console.log(a == 0.3)


//=============================

var y = 1;
if (function f(){}) {
    y += typeof f;
}
console.log(y);


//===========================


var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}

//===========================================
function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}

var car = Vehicle("Honda", "white", "2010", "UK");
console.log(car);

//=============================================


function foo1() {
    return
    {
        message: "Hello World"
    };
}
console.log(foo1()); //Undefined