// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0,2);
}

const returnLastTwoDrivers= function(arr){
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier=function (arg){
  return function fare(va){
    return arg *va;
  }
}
const fareDoubler = function(f){
  return createFareMultiplier(f)(2)
}
const fareTripler =  function(f){
  return createFareMultiplier(f)(3)
}

const selectDifferentDrivers = function(arr,fun) {
  return fun(arr)
}
