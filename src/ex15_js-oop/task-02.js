function ElectricalDevice(name, power, condition) {
    this.name = name;
    this.power = power;
    this.turnOn = condition;
}
ElectricalDevice.prototype.getName = function () {
    return this.name;
  }
  ElectricalDevice.prototype.setName = function (newName) {
    this.name = newName;
  }
  ElectricalDevice.prototype.getCondition = function () {
    return this.turnOn
  };
  
  function Fridge (name, power, condition) {
    ElectricalDevice.apply(this, arguments)
  }
  Fridge.prototype = Object.create(ElectricalDevice.prototype)
  Fridge.prototype.constructor = Fridge
  
  function Microwave (name, power, condition) {
    ElectricalDevice.apply(this, arguments)
  }
  Microwave.prototype = Object.create(ElectricalDevice.prototype)
  
  Microwave.prototype.constructor = Microwave
  
  function Kettle (name, power, condition) {
    ElectricalDevice.apply(this, arguments)
  }
  Kettle.prototype = Object.create(ElectricalDevice.prototype)
  
  Kettle.prototype.constructor = Kettle
  
  var fridge = new Fridge('Orsk', 200, true)
  var microwave = new Microwave('Horizont', 150, false)
  var kettle = new Kettle('Bosch', 170, false)
  
  function Room (...electricalDevice) {
    this.electricalDevice = electricalDevice
  }
  Room.prototype.getPower = function () {
    return (this.electricalDevice.reduce(function(acc, item){
      return acc + item.power
    }, 0))
  }
  Room.prototype.searching = function (value) {
    return this.electricalDevice.filter(function (item) {
      return item.name.includes(value)
    })
  }
  var roomDevice = new Room(fridge, microwave, kettle)
  console.log(roomDevice.getPower())
  console.log(roomDevice.searching('Orsk'))