const Car = require('./Car');
const Pslot = require('./PSlot');
const colors = require('colors');

class ParkingLot {
  constructor() {
    this.MAX_SIZE=0;
    this.parkingSlotMap=null;
    this.slotCarMap=null;
  }
  createParkingLot(size) {
    if(this.MAX_SIZE > 0) {
      console.log('Parking space already created');
    }
    else {
      this.MAX_SIZE=size;
      this.parkingSlotMap=new Map();
      this.slotCarMap=new Map();
      for(let i=1;i<=size;i++) {
        let tempSlot = new Pslot();
        this.parkingSlotMap.set(i,tempSlot);
      }
      console.log(`Parking space created of ${colors.green(size)} size`);
    }
  }

  status() {
    if(this.MAX_SIZE <= 0) {
      console.log('Parking space not created');
    }
    else {
      let availableCount=0;
      for (var [key, value] of this.parkingSlotMap) {
        if(value.available==true) {
          availableCount++;
        }
      }
      let FilledSlots = this.MAX_SIZE - availableCount;
      console.log(colors.green("Available Slots: ") + availableCount);
      console.log(colors.red("Filled Slots: ") + FilledSlots);
    }
  }

  _getNearestSlot() {
    for(var [key,value] of this.parkingSlotMap) {
      if(value.available==true) return key;
    }
    return 0;
  }

  park(regNo, color) {
      if (this.MAX_SIZE == 0) {
        console.log(colors.yellow('Sorry, parking lot is not created yet'));
      } else if (this._getNearestSlot()==0) {
        console.log(colors.red('Sorry, parking is fully occupied'));
      } else {
        let slot = this._getNearestSlot();
        let car = new Car(regNo,color);
        console.log(JSON.stringify(car));
        let pSlot = new Pslot();
        pSlot.setCar(car);
        pSlot.setAvailability(false);
        this.parkingSlotMap.set(slot,pSlot);
        console.log(`Parking slot ${colors.green(slot)} is allocated to ${colors.green(regNo)}`);
      }
  }

  seek(slotNo) {
    if(this.parkingSlotMap.has(parseInt(slotNo))) {
      if(!this.parkingSlotMap.get(parseInt(slotNo)).available) {
        console.log(`Vehicle details parked at ${colors.green(slotNo)}`);
        console.log(colors.cyan('SLOT') + '\t\t' + colors.cyan('Registration') +'\t\t'+ colors.cyan('Color'));
        console.log(`---------------------------------------------------------`);
        let obj = this.parkingSlotMap.get(parseInt(slotNo));
        console.log(`${slotNo} \t\t ${obj.car.regNo} \t\t ${obj.car.color}`);
        console.log(`---------------------------------------------------------`);
      }
      else {
        console.log(colors.red(`There is no vehicle parked at ${slotNo}`));
      }
    }
    else {
      console.log(colors.red(`Provided parking slot ${slotNo} is not created`));
    }
  }

  leave(slotNo) {
    if(this.parkingSlotMap.has(parseInt(slotNo))) {
      if(!this.parkingSlotMap.get(parseInt(slotNo)).available) {
        this.parkingSlotMap.get(parseInt(slotNo)).car=null;
        this.parkingSlotMap.get(parseInt(slotNo)).available=true;
        console.log(colors.green(`Slot No. ${slotNo} is available for parking new vehicle now`));
      }
      else {
        console.log(colors.red(`There is no vehicle parked at ${slotNo}`));
      }
    }
    else {
      console.log(colors.red(`Provided parking slot ${slotNo} is not created`));
    }
  }
}

module.exports = ParkingLot;