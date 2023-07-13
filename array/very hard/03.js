// Object থেকে সোরাসুরি forEach লুপ চালানো যাবে না, চালাতে গেলে আগে Array তে convert করে নিতে হবে!

let data1 = {
    title:"Hi My name Is an Array",
    age:23,
    bioData:{
        country:"Bangladesh"
    },
    analy:{
        video:{
            count:23
        },
        artical:{
            count :55
        },
        quiz:{
            count:44
        }
    }
}


let data2 = {
    title:"Hi My name Is an Array",
    age:23,
    bioData:{
        country:"Bangladesh"
    },
    analy:{
        video:{
            count:23
        },
        artical:{
            count :55
        },
        quiz:{
            count:44
        }
    } 
}


let result = [data1 , data2 ]
result.forEach(x=>{
    console.log(x.analy.video);
})

