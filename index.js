const returnFirstTwoDrivers = function(drivers){
    let firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(drivers){
    let lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers;
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, fn){
    return fn(drivers);
}