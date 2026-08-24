
 var x=50;                      //global variable
function myFunction(a,b) {
var x=a+b;                     //local variable
console.log(x);               // No return with argument
}
console.log(x);
myFunction(10,20);

function default_argument(name="Ram") {
    console.log(name);
}
default_argument("Shyam");  //default ram


function return_without_argument() {
    var x=10;
    var y=20;
    var z=x+y;
    return z;
}
var a=return_without_argument();
console.log(a);


function changetext() {
    var data =document.getElementById("come");
    console.log(data);
    data.style.cssText=`
    color:red;
    font-size:34px;
    `;
}
