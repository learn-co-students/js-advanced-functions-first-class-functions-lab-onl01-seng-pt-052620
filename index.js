function returnFirstTwoDrivers(array){
     const newArray = array.slice(0, 2)
     return newArray
    }

function returnLastTwoDrivers(array){
    const newArray = array.slice(-2)
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue){
    return function(value){
        return multiplyValue * value 
    }
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(array, returnLastTwoDrivers){
    return returnLastTwoDrivers(array)
}
