// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) { 
    return drivers.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

// function createFareMultiplier(n) {
//     return n => n * 5;
// }
function createFareMultiplier(num){
    return function (number){
        return number * num
    }
}
// const fareDoubler = function (n) { 
//     createFareMultiplier
// }
function fareDoubler(num) {
    return num * 2
}

function fareTripler(num) {
    return num * 3
}

function selectDifferentDrivers(array, func){
    return func(array)
}