// const outerfun=(a)=>{
// let b=10;
// const innerfun=()=>{
//     let sum=a+b;
//     console.log(`the sum is ${sum}`);
// }
//     innerfun();
// }
// outerfun(5);

function register (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("registered successfully");
            callback();
        },3000) 
    })
   
}

function sendEmail(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("email has been send");
            callback();
                },2000)
    })
    
}
function login(){
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("email has been send");
            callback();
                },1000)  
    })
    
}



console.log("outside the block");


async function a(){
    await register();
    await sendEmail();
    await login();
}



