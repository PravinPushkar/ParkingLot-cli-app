class PSlot{
  constructor(available=true) {
    this.available=available;
    this.car=null;
  }
  getAvailability() {
    this.available;
  }
  setAvailability(available) {
    this.available=available;
  }
  getCar() {
    return this.car;
  }
  setCar(car) {
    this.car = car;
  }
}
module.exports=PSlot;