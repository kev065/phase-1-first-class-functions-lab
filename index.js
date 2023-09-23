// Code your solution in this file!
const returnFirstTwoDrivers = ([Antonia, Nuru, Amari, Mo]) =>  ['Antonia', 'Nuru']

const returnLastTwoDrivers = ([Antonia,  Nuru, Amari, Mo]) => [ 'Amari', 'Mo' ]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
return function Hello(){
    return num * 5
}
}
createFareMultiplier(4)


const fareDoubler = (Hello) => {
    return Hello * 2
}
createFareMultiplier()


const fareTripler = (Hello) => {
    return Hello * 3
}
createFareMultiplier()


function selectDifferentDrivers(drivers, returnLastTwoDrivers){   
    drivers = returnLastTwoDrivers(); 
    return drivers;
}

