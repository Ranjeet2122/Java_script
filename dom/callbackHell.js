function first(callback){
    setTimeout(()=>{
        console.log("this is first");
        callback();
    },1000)
}


function middle1(callback){
    setTimeout(()=>{
        console.log("this is middle 1");
        callback();
    },1000)
}


function middle2 (callback){
    setTimeout(()=>{
        console.log("this is middle 2");
        callback();
    },1000)
}


function last(callback){
    setTimeout(()=>{
        console.log("this is the last");
        callback();
    },1000)
}


first(function (){
    middle1(function(){
        middle2(function(){
            last();
        })
    })
})