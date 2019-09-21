const Parkinglot = require('../../lib/ParkingLot');
const parkingLotInstance = new Parkinglot();

describe("parkinglot creation test", function() {
    it("should create a parking space", function() {
      parkingLotInstance.createParkingLot(2);
      expect(parkingLotInstance.MAX_SIZE).toEqual(2);
    });
});

describe("parkinglot status test", function() {
  it("should give status about filled spots ande available spots", function() {
    parkingLotInstance.status();
    let FilledSlots = parkingLotInstance.MAX_SIZE - 2;
    expect(FilledSlots).toEqual(0);
  });
});

describe("parkinglot test-Park a vehicle", function() {
  it("should reserve a spot for a given vehicle", function() {
    parkingLotInstance.park("KA08-JE-5678","white");
    let FilledSlots = parkingLotInstance.MAX_SIZE - 1;
    expect(FilledSlots).toEqual(1);
  });
});

describe("parkinglot test-Seek details of a vehicle", function() {
  it("should give the details of a parked vehicle", function() {
    parkingLotInstance.seek(1);
    let FilledSlots = parkingLotInstance.MAX_SIZE - 1;
    expect(FilledSlots).toEqual(1);
  });
});

describe("parkinglot test- vehicle leave the spot", function() {
  it("should epmty the spot", function() {
    parkingLotInstance.leave(1);
    let FilledSlots = parkingLotInstance.MAX_SIZE - 2;
    expect(FilledSlots).toEqual(0);
  });
});