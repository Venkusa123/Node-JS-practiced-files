const mario="lkjhgfdsa";

console.log(mario);
const abc=setInterval(()=>{
    console.log('i am from set interval');
},1000);

let ab=["a","a","s","daf","siasdd"];
console.log(ab);
clearInterval(abc)

const fs= require('fs');
fs.readFile('./createFolder/create1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
let arr1=['sda','asdfas','asdfasd',12312];
fs.writeFile('./first.js',arr1,()=>{
    console.log('written successfully;');
});



//Below is the code for the fs.existsSync("path of filename or folder name"),rmdir('path',(err)=>{}),fs.mkdir('foldername',(err)=>{})
if(fs.existsSync('./folder1')){
    fs.rmdir('./folder1',(err)=>{
        console.log(err);
    })
    console.log("delted folder successfully");
}else{
    fs.mkdir('./folder1',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder1 created successfully");
    })  
}
//code ends
//Below is code  for the deleting a file
if(fs.existsSync('./check.js')){
    fs.unlink('./check.js',(err)=>{
        console.log(err);
    })    
    console.log('check file is deleted successfully');
}else{
    fs.appendFile('./check.js',"Hello ia m added to check file",()=>{
        console.log("check file created successfully");
    });
}
//code ends