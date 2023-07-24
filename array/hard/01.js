/*

একটা number of Array এর ভিতরে 7 আছে কি না চেক করবে কি ভাবে
arr[i] == 7।। arr[i] % 10 == 7
arr[i].toString().includes(7)
এখানে return করতে বলছে "boom" / এই জন্যে toString() করে নিয়েছি


*/



function sevenBoom(arr){

    for(let i=0; i<arr.length; i++){
         if(arr[i].toString().includes(7)){
            return "boom"
         }
    }
    return 'not boom'

}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));// ➞ "Boom!"
// 7 contains the number seven.
console.log(sevenBoom([8, 6, 33, 100]) );//➞ "there is no 7 in the array"
// None of the items contain 7 within them.
console.log(sevenBoom([2, 55, 60, 97, 86])); //➞ "Boom!"
// 97 contains the number seven.