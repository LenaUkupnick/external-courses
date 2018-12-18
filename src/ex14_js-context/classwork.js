'use strict'
class Shape {
    findArea() { }
}
class Square extends Shape {
    findArea(a, b) {
        if (a !== undefined && b !== undefined) {
            return a * b;
        }
        return 'Xa-xa try again!';
    }
}
class Triangle extends Shape {
    findArea(a, h) {
        if (a !== undefined && h !== undefined) {
            return (a / 2) * h
        }
        return 'Xa-xa try again!';
    }
}    
let newSquare = new Square;
let newTriangle = new Triangle;
console.log(newSquare.findArea(2));
console.log(newTriangle.findArea(4,3));