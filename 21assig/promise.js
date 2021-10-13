const isLegal = new Promise((resolve,reject)=> {
    let age = 20
    if(age >=18 ) {
        resolve(document.querySelector(".timer").innerText= "10");
    } else {
        reject("minor")
    }

});

isLegal
.then((msg)=> setTimeout(()=> {
    document.querySelector(".timer").innerText= "9" 
    },1000*1))
.then((msg1)=> msg1 +  setTimeout(()=> {
    document.querySelector(".timer").innerText= "8" 
    },1000*2))
.then((msg2)=> msg2 +  setTimeout(()=> {
    document.querySelector(".timer").innerText= "7" 
    },1000*3))
.then((msg3)=> msg3 +  setTimeout(()=> {
    document.querySelector(".timer").innerText= "6" 
    },1000*4))
.then((msg4)=> msg4 +  setTimeout(()=> {
    document.querySelector(".timer").innerText= "5" 
    },1000*5))
.then((msg5)=> msg5 +  setTimeout(()=> {
    document.querySelector(".timer").innerText= "4" 
    },1000*6))
.then((msg6)=> msg6 +  setTimeout(()=> {
    document.querySelector(".timer").innerText= "3" 
    },1000*7))
.then((msg7)=> msg7 +  setTimeout(()=> {
    document.querySelector(".timer").innerText= "2" 
    },1000*8))
.then((msg8)=> msg8 +  setTimeout(()=> {
    document.querySelector(".timer").innerText= "1" 
    },1000*9))
.then((msg9)=> msg9 +  setTimeout(()=> {
    document.querySelector(".timer").innerText= "Happy Independence Day!...." 
    },1000*10))
.catch((errmsg)=>console.log(errmsg));