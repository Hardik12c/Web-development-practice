console.log('this is a custom module');
let average=(arr=>{
    let sum=0;
    arr.forEach(Element=>{
        sum+=Element;
    })
    return sum/arr.length;
})
module.exports={
    avg:average,
    name:"hardik",
    subject:'webd'
};