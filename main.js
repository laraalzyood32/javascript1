let x=10;
let y=12;
let z=2;
let m=4;
let a=6;
let b=8;
let c=10;
let sum=x+y+z+a+b+c+m;
let sub=y-z;
let mul=x*z;
let division=y/z;
let average=sum/7;
const personalinfo = {
  firstName: "lara",
  lastName: "alzyood",
  age: 32,
  birthday:" (7/3/1989)",
  mijor:"computer engineering",
  nationality:"jordanian",
};
document.getElementById("demo").innerHTML = 
"I am "+  personalinfo.firstName  +
 " I am" + " " + personalinfo.age + " years old" + " " 
  +  " i was born in " + "  " +  personalinfo.birthday + " " +
   "i majored " + " " + personalinfo.mijor + "  " 
 + "iam" + "  "+ " " + personalinfo.nationality ;

 

document.getElementById("add").innerHTML=sum45e4t8iktq2;
document.getElementById("sub").innerHTML=sub ;
document.getElementById("mul").innerHTML=mul ;
document.getElementById("div").innerHTML=division;
document.getElementById("average").innerHTML=average ;

function hidden(){
    var x=document.getElementById("me");
    if (x.innerHTML==="about me"){
       x.innerHTML= " my name is lara iam 32 years old i studied computer engineering . i like programming so i take this useful course";
    } else {
    x.innerHTML="about me";
   }
}

function DarkMODE(){
    document.body.classList.toggle("dark");
    document.body.style.transition=("alt 2s")
}
function  icon(){
    document.write(<i class="fas fa-sun"></i>)
}
