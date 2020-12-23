const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr) {
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i) {
  return function(fare){
    return fare * i
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, drivers) {
  return drivers(arr)
}