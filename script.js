
var a= +prompt("enter the marks: ");
  if(a>100 ){
    alert("invalid number");
  }

else if(a>=90 && a<=100){

    alert("You got A grade");
}
else if(a>=80 && a<=90){

    alert("You got B grade");
}
else if(a>=70 && a<=89){

    alert("You got C grade");
}
else if(a>=60 && a<=69){

    alert("You got D grade");
}

else{
    alert("fail");
}