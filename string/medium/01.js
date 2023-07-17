
/*
এই রকম Object টাইপ ডাটা দেখতে পেলে সেটা এক্সেস নিতে হয় Array Notation এর মাধ্যমে !

*/



function xy(x,y){

   let data = {
      "1":{ 
        m:1,
        f:20000,
      },
      "2":{
       m:2,
       f:66666
      }
    }
    console.log(data[x][y])

}

xy(1,"f")
