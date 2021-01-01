// Code your solution in this file!
const returnFirstTwoDrivers = function (drive) {
    return drive.slice(0, 2)
}

const returnLastTwoDrivers = function (driver) {
    return driver.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue) {
    return function(value) {
        return multiplyValue * value;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, diffDrivers){
    return diffDrivers(drivers)
}