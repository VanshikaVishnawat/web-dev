var randomnum1=Math.floor(Math.random()*6)+1;
var randomdice="images/dice"+randomnum1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdice);
var randomnum2=Math.floor(Math.random()*6)+1;
var randomdice2="images/dice"+randomnum2+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdice2);

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="Player I Wins!! Congratulations";

}
else if(randomnum2>randomnum1){
    document.querySelector("h1").innerHTML="Player II Wins!! Congratulations";
}
else{
    document.querySelector("h1").innerHTML="DRAW!!";
}
