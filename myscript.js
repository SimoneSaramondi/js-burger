var toCalcolate = document.getElementById("button");
toCalcolate.addEventListener("click", function(){

var hamburger = document.getElementById("name");
var hamburgerName = hamburger.value;
console.log(hamburgerName);

var ingredientsList = document.querySelectorAll(".ingredient [type='checkbox']");
console.log(ingredientsList);

var somma = 50;

for(var i = 0; i < ingredientsList.length; i++){
    var ingredient = ingredientsList[i];
    if(ingredient.checked){
        somma += parseInt(ingredient.value)
    }
}
document.getElementById("price").innerText = somma;
console.log(somma);


})


