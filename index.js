 var random=Math.floor(Math.random()*6)+1;
 var randomimage="dice"+random+".png";
 var randomsource="images/"+randomimage;
 var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",randomsource);

var random2=Math.floor(Math.random()*6)+1;
var source2="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",source2);

if(random>random2){
document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(random<random2){
document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
document.querySelector("h1").innerHTML="Draw";
}
