outerFunction=()=>{
    var a=10;
      innerFunction=()=>{
        console.log(a);
      }
      innerFunction();
  }
  outerFunction();

