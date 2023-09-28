// function hi() {
//     let promise1 = new Promise((res, rej) => {
//       res("promise1 resolved");
//     });
  
//     let promise2 = new Promise((res, rej) => {
//       rej("promise2 resolved");
//     });
  
//     let common = Promise.all([promise1, promise2]);
//     return common;
//   }
  
//   async function display() {
//     try {
//       let [data1, data2] = await hi(); // Destructure the results
//       console.log(data1); // This will log "promise1 resolved"
//       console.log(data2); // This will log "promise2 resolved"
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   display();
  


console.log("start");
function first (){
 return new Promise((resolve, reject) => {
    setTimeout(()=>{
          resolve("this is the first")
    },1000)
  })
}


function middle1(){
 return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("this is the middle 1 ");

    },1000)
  })
}




function middle2(){
 return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("this is the middle 2");

    },1000)
  })
}



function last (){
 return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("this is the last ")
    },1000)
  })
}

 console.log("stop");


 first()
 .then((res)=>{
  console.log(res);
  return middle1();
 })
 .then((res)=>{
  console.log(res);
  return middle2();
 })
.then((res)=>{
 console.log(res);
 return last();
})
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})

