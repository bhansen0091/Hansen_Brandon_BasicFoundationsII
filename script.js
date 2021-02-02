
/* //1

var testArr = [-1,3,5,-5]
function biggieSize(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
            newArr.push(arr[i]);
        }
        else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var test = biggieSize(testArr);
console.log(test);

*/

//--------------------------------------------

/* //2

var testArr = [5,-10,-12,65,1,0]
function printLowReturnHigh(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}

console.log(printLowReturnHigh(testArr));

*/

//--------------------------------------------

/* //3

var testArr = [-10,5,9,84,-100]
var testArr2 = [654,-654897,4845231,15,6584,4]
function printOneReturnAnother(arr) {
    var returnValue = arr[arr.length-2];
    var firstOdd = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            firstOdd = arr[i];
            console.log(`The firse odd number is ${firstOdd}`);
            break;
        }
    }
    return returnValue;
}

var test = printOneReturnAnother(testArr);
console.log(test);
test = printOneReturnAnother(testArr2);
console.log(test);

*/

//--------------------------------------------

/* //4

var testArr = [1,2,3];
function doubleVision(arr) {
    var newArr = [];
    var doubles = 0;
    for (var i = 0; i < arr.length; i++) {
        doubles = arr[i] * 2;
        newArr.push(doubles);
    }
    return newArr;
}

var test = doubleVision(testArr);
console.log(test);

*/

//--------------------------------------------

/* //5

var testArr = [-1,1,1,1];
function countPositives(arr) {
    var newArr = arr;
    var sumOfPositives = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sumOfPositives++;
        }
    }
    newArr.pop();
    newArr.push(sumOfPositives);
    return newArr;
}

testArr = countPositives(testArr);
console.log(testArr);

*/

//--------------------------------------------

/* //6

var testArr = [1,2,111,1,3,2,4,6,9]
function evensAndOdds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i-1] != null) {            
            if (arr[i] % 2 != 0 && arr[i-1] % 2 != 0 && arr[i-2] % 2 !=0) {
                console.log("That's odd!");
            }
            else if (arr[i] % 2 == 0 && arr[i-1] % 2 == 0 && arr[i-2] % 2 == 0) {
                console.log("Even more so!");
            }
        }
    }
}

console.log(evensAndOdds(testArr));

*/

//--------------------------------------------

/* //7

var testArr = [0,2,0,4,0,6,0,8]
function incrementTheSeconds(arr) {    
    for (var i = 1; i < arr.length; i += 2) {
        arr[i] = arr[i] + 1;
    }
    return arr;
}

console.log(incrementTheSeconds(testArr));

*/

//--------------------------------------------

/* //8

var testArr = ["hello", "dojo", "awesome"]
function previousLengths(arr) {
    for (var i = arr.length-1; i > - 1; i--) {
        if (arr[i-1] != null) {
        arr[i] =  arr.indexOf(arr[i-1]);
        }
    }
    return arr;
}

console.log(previousLengths(testArr));

*/

//--------------------------------------------

/* //9

var testArr = [1,2,3];
function addSeven(arr) {
    var newArr = [];
    var temp = 0
    for (var i = 0; i < arr.length; i++) {
        temp = arr[i] + 7;
        newArr.push(temp);
    }
    return newArr;
}

console.log(testArr);
console.log(addSeven(testArr));

*/

//--------------------------------------------

/* //10

var testArr = [3,1,6,4,2];
var testArr2 = [10,9,8,7,6,5,4,3,2,1];
function reverseArray(arr) {
    var temp = 0;
    var counter = 1;
    for (var i = 0; i < Math.trunc(arr.length / 2); i++) {
        if (arr.indexOf(arr[arr.length-counter]) != arr.indexOf(arr[i])) {
            temp = arr[i];
            arr[i] =arr[arr.length-counter];
            arr[arr.length-counter] = temp;
            counter++;
        }
    }
    return arr;
}

console.log(reverseArray(testArr));
console.log(reverseArray(testArr2));

*/

//--------------------------------------------

/* //11

var testArr = [1,-3,5];
var testArr2 = [1,5,-6,7,-20,15,18,9,-7];
function outlookNegative(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i] * - 1);
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(outlookNegative(testArr));
console.log(outlookNegative(testArr2));

*/

//--------------------------------------------

/* //12

var testArr = [1,2,"food",9,"food"];
var testArr2 = [1,2,3,4,5,6]
function alwaysHungry(arr) {
    var hasFood = arr.indexOf("food");
    if (hasFood) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == "food") {
                console.log("yummy");
            }
        }
    }
    if (hasFood == - 1) {
        console.log("I'm hungry");
    }
}

alwaysHungry(testArr);
alwaysHungry(testArr2);

*/

//--------------------------------------------

/* //13

var testArr = [true,42,"Ada",2,"pizza"];
var testArr2 = ["numbers","random",2,"has", 1, "this"];
function swapTowardCenter(arr) {
    var temp = 0;
    var counter = 1;
    for (var i = 0; i < Math.trunc(arr.length / 2); i++) {
        if (arr.indexOf(arr[arr.length-counter]) != arr.indexOf(arr[i])) {
            temp = arr[i];
            arr[i] =arr[arr.length-counter];
            arr[arr.length-counter] = temp;
            counter++;
        }
    }
    return arr;
}

console.log(swapTowardCenter(testArr));
console.log(swapTowardCenter(testArr2));



var testArr = [true,42,"Ada",2,"pizza"];

function swapCenter(arr) {
    for (var i = 0; i < arr.length / 2; i+=2) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(swapCenter(testArr));

//destructuring

*/

//--------------------------------------------

 //14

var testArr = [1,2,3];
var multiplier = 3;
function scaleTheArray(arr, num) {
    var temp = arr[0];
    for (var i = 0; i < arr.length; i++) {
        temp = arr[i] * num;
        arr[i] = temp;
    }
    return arr;
}

console.log(scaleTheArray(testArr, multiplier));