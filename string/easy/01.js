/*

এই ভাবে যদি থাকে 
let newStr = " " 
এটি string কে ধারণ করার জন্যে
newStr += str[i] or
newStr = newStr + str[i]


আর সেফটির জন্যে toString() করে নিব সব সময়
এখানে str[i] ভ্যালু গুলো দেয়
আর i দেয় index


*/



function detectWord(str){
    let newStr = ""
    for(let i=0; i<str.length; i++){ 
        if(str[i]===str[i].toString().toLowerCase()){
           newStr += str[i]
        }
        
    }
    return newStr

}
console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));