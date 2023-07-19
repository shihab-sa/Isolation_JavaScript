/*
    str.length - 1 কেন দিতে হয় ব্যাক্ষা দাও

    
    index 0 1 2 
    but length 3 
    less 1 
   এই জন্যে 1 কমাতে হবে 


*/


/*

function lenT(arr){

    for(let i=0; i<arr.length; i++){
        let cw = arr[i]
        let nextW = arr[i+1]

        console.log("cw",cw);
        console.log("nextW",nextW);
    }

}
lenT([2,4,5])


*/
// 2nd Step 



function lenT(arr){

    for(let i=0; i<arr.length-1; i++){
        let cw = arr[i]
        let nextW = arr[i+1]

        console.log("cw",cw);
        console.log("nextW",nextW);
    }

}
lenT([2,4,5])
