const http=require('http');
const fs= require('fs');

const fileContent=fs.readFileSync("hardik14.html");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);
})
host='127.0.0.1';
server.listen(80,host,()=>{
    console.log(`welcome to port 80 http://${host}`);
});
