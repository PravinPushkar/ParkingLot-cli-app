class Car {
  constructor(regNo, color) {
    this.regNo=regNo;
    this.color=color;
  }
  getRegNo() {
    return this.regNo;
  }
  getColor() {
    return this.color;
  }
}

module.exports = Car;