'use strict'
var user = {};
user.name = "Lena";
user.surname = "Barinova";
user.city = "Ryazan";
user.age = "21";

delete user.city;
console.log (user);