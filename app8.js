var fs = require("fs");
var filedata = fs.readFileSync("myexternal.txt");
console.log(filedata.toString());
console.log(":::::End of program execution by node.js:::::");

console.log("\n");

fs.readFile("myexternal.txt", function (err, fdata) {  
    if (err) {
        return console.error(err);
    }  
    console.log(fdata.toString());  
});
console.log(":::::Start of program execution by node.js:::::"); 