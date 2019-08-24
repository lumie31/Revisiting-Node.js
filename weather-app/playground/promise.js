const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be of type number");
      }
    }, 1500);
  });
};

asyncAdd(5, 7)
  .then(res => {
    console.log("Result:", res);
    return asyncAdd(res, "33");
  })
  .then(res => {
    console.log("Should be 45", res);
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });

// asyncAdd(5, 7).then(
//   res => {
//     console.log("Result:", res);
//     return asyncAdd(res, 33);
//   },
//   errMsg => {
//     console.log("Error:", errMsg);
//   }
// );

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Hey, It worked!");
//     reject("Unable to fulfil promise");
//   }, 2500);
// });

// somePromise.then(
//   msg => {
//     console.log("Success:", msg);
//   },
//   errorMsg => {
//     console.log("Error:", errorMsg);
//   }
// );
