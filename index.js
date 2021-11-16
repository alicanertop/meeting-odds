
/**
 * @typedef PredictCalculatorParams
 * @property {number} limitToMeet time limit to meet
 * @property {number} personCount
 * @property {number} waitingTime when person came how long will person wait
 */

/**
 * 
 * @param {PredictCalculatorParams} params 
 * @returns 
 */
const predictionCalculator = (params) => {
     const absHelper = (x, y) => Math.abs(x - y)
     
     const { personCount = 2, limitToMeet = 60, waitingTime = 15 } = params || {};
     let i = 0;
     const arr = Array.from({ length: personCount }).map((_) => Math.random() * limitToMeet);
     const resArr = [];
     while (i < arr.length-1) {
          resArr.push(absHelper(arr[i], arr[i + 1]))          
          for (let l = 0; l < i; l++) 
          resArr.push(absHelper(arr[l],arr[i+1]))
          ++i;
     }
     return resArr.every((prev) => prev <= waitingTime)
}


/**
 * 
 * @param {Number} predCount 
 * @param {PredictCalculatorParams} calculatorParams 
 * @returns 
 */
const calculate = (predCount=1000000,calculatorParams) => {
let count = 0;
const startTime = new Date().getTime()
for (let i = 0; i < predCount; i++) {
     if (predictionCalculator(calculatorParams)) ++count;
}
const endTime = new Date().getTime()
const result = count / predCount
console.log(`Result ${result} Proccess time is ${(endTime - startTime) / 1000} second`);
return result
}

calculate(10000000)