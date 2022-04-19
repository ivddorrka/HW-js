function splitReverseMethod(str) {
    return str.split("").reverse().join("");
}
 
function recurseMethod(str) {
    if (str === "")
      return "";
    else
      return recurseMethod(str.substr(1)) + str[0];
}
 
function iterationMeth3_1(str) {
    var answer = "";
    var lenn = str.length;

    for (var i = lenn - 1; i >= 0; i--) {
        answer += str[i];
    }
    return answer;
}


function iterationMeth3_2(str) {
    var arr = [];
    var lenn = str.length;
    arr.length = lenn;
    for (var i = 0; i<lenn ; i++) {
        arr[lenn-i]= str[i];
    }
    return arr.join("");
    
}


function reduceMethod(str){
    return str.split('').reduce((aPos, bPos)=> bPos + aPos, "");
}


console.log(iterationMeth3_2("hello1"));
console.log(splitReverseMethod("hello2"));
console.log(recurseMethod("hello3"));
console.log(iterationMeth3_1("hello4"));
console.log(reduceMethod("hello5"));