// Different between Array JSON Object Data and JSON Object to Object Data

let myData = {
    "2": [3,4,5,6,7],
    "3":[44,55,6,7],
    "4":[56,66,5,6]
}

console.log(myData[2]);
console.log(myData[2][0]);


//------------------------ JSON Object to Object Data ------------------------


let myDataTwo = {
    "6":{x:4,y:33},
    "7":{x:77,y:90}
}

console.log(myDataTwo[6]);
console.log(myDataTwo[6][0]); // undefiend
console.log(myDataTwo[6]['x']);