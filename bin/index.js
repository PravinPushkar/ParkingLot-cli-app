#!/usr/bin/env node
const readline = require('readline');
const ParkingLot = require('../lib/ParkingLot');
const parkingLotInstance = new ParkingLot();
const colors = require('colors');

const RL = readline.createInterface({
    input: process.stdin
});

let bootstarp = () => {
    console.log(`Supported commands are -`)
    console.log(`---------------------------------`);
    console.log(colors.cyan(`create_parking_lot <size>`));
    console.log(colors.cyan(`park <registration number> <color>`));
    console.log(colors.cyan(`seek <slot number>`));
    console.log(colors.cyan(`leave <slot number>`));
    console.log(colors.cyan(`status`));
    console.log(colors.cyan(`press CTRL + c to exit`));
    console.log(`---------------------------------`);
    RL.on('line', (input) => {
        input = input.split(" ");
        switch (input[0]) {
            case ('create_parking_lot'):
                try {
                    parkingLotInstance.createParkingLot(input[1]);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;
            case ('park'):
                try {
                    parkingLotInstance.park(input[1].trim(), input[2].trim());
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;
            case ('seek'):
                try {
                    parkingLotInstance.seek(input[1].trim());
                }
                catch (e) {
                  console.log(`error occured ===> ${e}`);
                }
                break;
            case ('leave'):
                try {
                    parkingLotInstance.leave(input[1]);

                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;
            case ('status'):
                try {
                    parkingLotInstance.status();

                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;
            case ('exit'):
              RL.pause();
                break;
            default:
                console.log('Incorrect usage of the command, Please see above for correct syntax');
        }

    });
}

RL.on('SIGINT', () => {
  RL.pause();
}); 
 
bootstarp();