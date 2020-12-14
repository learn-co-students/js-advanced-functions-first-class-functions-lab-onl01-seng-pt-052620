// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    const [Sally, Bob, , ] = drivers
    return [Sally, Bob]
}

const returnLastTwoDrivers = function(drivers) {
    const [ , , Freddy, Claudia] = drivers
    return [Freddy, Claudia]
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier(int) {
    return function(fair) {
        return fair * int
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, returnFunction) {
    return returnFunction(driverArray)
}