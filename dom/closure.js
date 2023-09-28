// function outerFunction() {
//     // This variable is defined in the outer function's scope.
//     const outer= 10; 
  
//     // Inner function (closure)
//     function innerFunction() {
//       // The inner function can access the outer variable even after the outer function has finished executing.
//       console.log(outer);
//     }
  
//     // Return the inner function, creating a closure.
//     return innerFunction;
//   }
  
//   // Create a closure by calling outerFunction and storing the result in a variable.
//   const closure = outerFunction();
  
//   // Now, you can invoke the closure, and it will still have access to outerVar.
//   closure(); 





  //A closure is a function that captures and "closes over" its surrounding lexical scope,
  // preserving access to variables and values from that scope even after the outer function has finished executing.






  // function outerfunction(){
  //   const a=10;
  //   function innerFunction(){
  //       console.log(a);
  //   }
  //    return innerFunction();
  // }

  // const closure = outerfunction();

  // closure();






  // function outerFunction(){
  //   var a=10;
  //     function innerFunction(){
  //       console.log(a);
  //     }
  //     innerFunction();
  // }
  // outerFunction();


  outerFunction=()=>{
    var a=10;
      innerFunction=()=>{
        console.log(a);
      }
      innerFunction();
  }
  outerFunction();


  