class Sweets {
    constructor(name) {
        this.name = name;
    }
}

class Chocolate extends Sweets {
    constructor(name, weight) {
        super(name);
        this.weight = weight;
    }
}

var milka = new Chocolate('Milka', 90);
var alpenGold = new Chocolate('Alpen Gold', 200);
var ritterSport = new Chocolate('Ritter Sport', 100);

class Gift {
    constructor(...name) {
        this.items = [...name];
    }
    findWeight() {
        return (this.items.reduce(function (acc,item) {
            return acc + item.weight;
        },0));
    }
    sorting(){
        this.items.sort(function (a,b) {
            return a.weight - b.weight;
        });
      return this;
    }
    searching(value) {
        return this.items.filter(function (item) {
            return item.name.includes(value);
        });
    }
}
var newYearGift = new Gift(milka, alpenGold, ritterSport);
console.log(newYearGift.findWeight());
console.log(newYearGift.sorting());
console.log(newYearGift.searching('Ritter Sport'));