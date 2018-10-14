console.log("App starting ....");
const someFunction = () => {
  console.log(" Second sync function....");
};

setTimeout(() => {
  console.log(" first  Inside setTimeOut....");
}, 3000);

someFunction();

console.log("App finishing ....");
