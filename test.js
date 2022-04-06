let text = "This is another test";
var str=[];
function reverse(string){
    const myArray = string.split(" ");
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].length>5){
            let s=""
            for (let j = myArray[i].length - 1; j >= 0; j--){
                s += myArray[i][j]
              }
            str.push(s)
        }else{
            str.push(myArray[i])
        }
        
    }
    
}
reverse(text)
var reverstr="";
for(let i=0;i<str.length;i++){
    reverstr+=str[i];
    reverstr+=" "
}
console.log(reverstr)