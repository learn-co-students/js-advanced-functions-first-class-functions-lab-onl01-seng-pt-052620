// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    const [first, second, , ] = drivers;
    return [first, second]
}

const returnLastTwoDrivers = function(drivers) {
    const [, , third, last] = drivers;
    return [third, last];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare){ return int * fare;};
}

function fareDoubler(fare) { 
    return createFareMultiplier(2)(fare); 
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, funk) {
    return funk(drivers);
}