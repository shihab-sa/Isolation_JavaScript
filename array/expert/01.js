/* 
   যখন আমাদের input ভ্যালু থাকে না arguments এ, null / ফাঁকা / undefined থাকে,
   তখন সেটিকেই আগে লজিক লিখে  null / ফাঁকা/ undefined করে দেওয়ার লাগে
*/
/*
  এখানে str এর ভ্যালু আছে, কিন্তু !str দেওয়ার পর, নাই !
  নাই != আছে 
 এ রকম লজিকটা!
*/

function recurIndex(str) {
    if (!str) {
      return {};
    }
  
    
  }
  
  // Example usages:
  console.log(recurIndex("DXTDXTXDTXD")); // {"D": [0, 3]}
  console.log(recurIndex("YXZXYTUVXWV")); // {"X": [1, 3]}
  console.log(recurIndex("YZTTZMNERXE")); // {"T": [2, 3]}
  console.log(recurIndex("AREDCBSDERD")); // {"D": [3, 7]}
  console.log(recurIndex("")); // {}
  console.log(recurIndex(null)); // {}
  