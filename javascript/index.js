var varName='ahmad';
console.log(varName)
var student='ali';
console.log(student)
var x=[1,2,3,4];
console.log(x)
let newStudent="sami"
console.log(newStudent);
const constName="mohammed"
console.log(document.getElementById('title1').innerHTML)
var title1 = document.getElementById('title1')
title1.innerHTML="this is from js"
title1.style.backgroundColor="red"
var newDiv = document.getElementById('newDiv')
newDiv.innerHTML=`<H1> this is new h1 ${constName} </H1>`
var newClass=document.getElementsByClassName('newTitle')
newClass[1].innerHTML="this is an update for the new list "
var findP =document.getElementsByTagName("p")
for(let i =0; i<findP.length; i++){
    if(i%2==0){
        findP[i].innerHTML="new"
    findP[i].style.backgroundColor="gray"
    findP[i].style.fontSize='25px'
    }
    else{
        findP[i].innerHTML="new"
        findP[i].style.backgroundColor="red"
        findP[i].style.fontSize='25px'
    
    }
}
             // task
var pElem=document.createElement("p")
pElem.innerHTML="<h1>this is new p element</h1>"
document.body.appendChild(pElem)
pElem.style.color="grey"

function summation(){
    // task solve 
  var input1=document.getElementById("num1").value
  var input2=document.getElementById("num2").value
  var opreation=document.getElementById("op").value
  var number1=parseInt(input1)
  var number2=parseInt(input2)
  var res
  if(opreation=="+"){
    res=number1+number2
  }else if(opreation=="*"){
    res=number1*number2
  }else if(opreation=="-"){
    res=number1-number2
  }else if(opreation=="/"){
    res=number1/number2
  }
  var result =document.getElementById("sp")
  result.innerHTML=res
}
