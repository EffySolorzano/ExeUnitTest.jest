// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
//currency exchance function 
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
let oneDollarIs ={
    "JPY": 127.9, // japan yen
    "GBP": 0.8, // british pound
    "EUR": 1.2 // euro
}
let oneYenIs ={
    "GBP": 0.4,
    "EUR": 1,
    "USD": 1.8,
}

const fromEuroToDollar = (euro) => {
    const result = euro * oneEuroIs.USD
    return result;
}

const fromDollarToYen = (dollar) => {
    const result = dollar * oneDollarIs.JPY
    return result;
}

const fromYentoPound = (yen) => {
    const result = yen * oneYenIs.GBP
    return result;
}
// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound};




