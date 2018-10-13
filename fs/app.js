const fs = require("fs");
const os = require("os");

const user = os.userInfo();
console.log(user);

// fs.appendFile("greeting.txt", "hello world!!", err => {
//   if (err) {
//     console.log(err);
//   }
// });
