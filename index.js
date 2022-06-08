// Add answers here 

const nameOfCity = str => str.toLowerCase().startsWith('los') || str.toLowerCase().startsWith('new') ? str : "The city name does not begin with Los or New"

const isDivisible = int => int % 100 === 0 

const isRaining = bool => bool ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home"

const geometricalSequence = () => {
    let output = [1]
    for (i=0; i<8; i++) {
        output.push(output[i]*2)
    }
    return output.join(" ")
}

const multiplesOfThree = () => {
    let output = []
    for (i=1; i<6; i++) {
        output.push(3*i)
    }
    return output.join(" ")
}

const powerOf = int => Math.pow(int,int)

const vowelCount = str => {
    let cache = Array.from(str.toLowerCase())
    let counter = 0
    for(i of cache) {
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            counter += 1
        }
    }
    return counter
}
// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

