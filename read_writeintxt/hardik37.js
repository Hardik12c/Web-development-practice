const fs=require("fs");
let text=fs.readFileSync("hardik.txt","utf-8");
console.log(text);
text=text.replace("hardik","Dharmahendra");
fs.writeFileSync("Dharmahendra.txt",text);
// fs.writeFileSync("Dharmahendra.txt","hello you are a good boy");
let Dm=fs.readFileSync("Dharmahendra.txt","utf-8")
console.log(Dm)