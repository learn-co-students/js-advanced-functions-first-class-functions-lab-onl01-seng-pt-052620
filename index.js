// Code your solution in this file!

const returnFirstTwoDrivers = (driverArray) => {
  return driverArray.slice(0, 2);
}

const returnLastTwoDrivers = (driverArray) => {
  return driverArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return (fareAmount) => { return fareAmount * multiplier };
}

const fareDoubler = (fareAmount) => createFareMultiplier(2)(fareAmount);
const fareTripler = (fareAmount) => createFareMultiplier(3)(fareAmount);

function selectDifferentDrivers(driverArray, driverSelectFunction) {
  return driverSelectFunction(driverArray);
}