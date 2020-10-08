let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btnClr = document.getElementById('btnClr');
let btnEql = document.getElementById('btnEql');
let btnAdd = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');
let res = document.getElementById('res');
let pow=0;
let count=0;
let string = res.innerHTML;
btn0.addEventListener('click',function(){
    res.innerHTML = res.innerHTML+0;
})

btn1.addEventListener('click', function () {
    res.innerHTML = res.innerHTML + 1;
})

btnAdd.addEventListener("click",function(){
    res.innerHTML = res.innerHTML + `+`;
})

btnSub.addEventListener("click", function () {
    res.innerHTML = res.innerHTML + "-";
})

btnMul.addEventListener("click", function () {
    res.innerHTML = res.innerHTML + "*";
})

btnDiv.addEventListener("click", function () {
    res.innerHTML = res.innerHTML + "/";
})

btnClr.addEventListener("click", function () {
    res.innerHTML = '';
})

btnEql.addEventListener('click',function(){
    let string = res.innerHTML;
    for(let i = 0; i<string.length; i++)
    {
        if (string[i] === "+" || string[i] === "-" || string[i] === "*" || string[i] === "/")
        {  
           
           let result = operation(string[i],string);
           res.innerHTML = toBinary(result);
           pow=0;
           count=0;
           break;
        }
    }
})
function operation(inp,string){
    
    let stringArray = string.split(inp);
    
    if(inp === "+") 
        return(parseInt(stringArray[0], 2) + parseInt(stringArray[1], 2));
    else if (inp === '-')
        return (parseInt(stringArray[0], 2) - parseInt(stringArray[1], 2));
    else if (inp === '*')
        return (parseInt(stringArray[0], 2) * parseInt(stringArray[1], 2));
    else
        return (parseInt(stringArray[0], 2) / parseInt(stringArray[1], 2)); 

    }

function toBinary(inp){
    if (inp === 0) return "0000";
   while(inp!==0){
       pow = pow + (inp%2)*Math.pow(10,count);
       count++;
       inp = Math.floor(inp/2);
       console.log(inp);
   }
   return pow;
}//10=1010; 10%2=0.....10/2; 5%2=1---5/2; 2%2=0-----2/2;1%2=1;
//6%2=0;3%2=1;1%2=1
/*
console.log(toBinary(110));
let bin = 11001;
let dec = parseInt(bin,2);
console.log(dec);

var str = "11";
var bin = (+str).toString(2);
console.log(bin)*/
