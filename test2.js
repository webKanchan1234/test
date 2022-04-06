var string="John have   an apple The sky is blue. they get a coin";
var str="";
str+=string[0];
for(let i=1;i<string.length;i++){
    if(string[i]===' ' && string[i+1]===' '){
        str+="";
    }else if(string[i]===' ' && (string[i+1]>='A' && string[i+1]<='Z')){
        str+=". ";
    }else if(string[i]==='.' && string[i+1]===' '){
        str+=string[i];
        str+="";

    }else if((string[i]==='.') && (string[i+1]===' ') && (string[i+2] === string[i+2].toLowerCase())){
        string[i+2].toUpperCase();

    }else{
        str+=string[i];
    }
}

console.log("John have an apple. The sky is blue. They get a coin.")
console.log(str+".")