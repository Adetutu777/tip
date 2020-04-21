function calcTip (e){

e.preventDefault();


var bill = document.querySelector(".input-box").value;
var percentage = document.querySelector("#tip").value/100;

var people = document.querySelector("#input").value;
var hide = document.querySelector("#score")

tipCalc = (bill*percentage)/people;


var pit = document.querySelector(".line"); 

hide.style.display = "block";
pit.innerHTML= "₦" + Math.ceil(tipCalc ) +((people > 1) ? "" + '         ' + "each" : "");

}

var btn = document.querySelector(".charset");

btn.addEventListener("click", calcTip);
