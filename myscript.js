// AL CLICK DEL BOTTONE LA FUNZIONE SI ATTIVA
var toCalcolate = document.getElementById("button");
toCalcolate.addEventListener("click", function(){

    // REUPERA IL NOME DELL'HAMBURGER
var hamburger = document.getElementById("name");
var hamburgerName = hamburger.value;


//SE NON E' PRESENTE IL NOME DEL PANINO NON NE CALCOLA IL PREZZO 
if(hamburgerName === ""){
    alert("Inserisci il nome dell'hamburger");
} else{
// console.log(hamburgerName);

    // INSERISCO TUTTI GLI INGREDIENTI IN UNO PSEUDO-ARRAY
    // Solo qualli con classe ingredient e type = "checkbox" 
var ingredientsList = document.querySelectorAll(".ingredient [type='checkbox']");

var somma = 50;

    // IL CICLO FUNZIONE FINO A QUANDO NON HA FATTO PASSARE TUTTI GLI INGREDIENTI
for(var i = 0; i < ingredientsList.length; i++){
    var ingredient = ingredientsList[i];
    // Se l'elemento su cui stiamo passando è segnato prendo il prezzo
    // di questo tramite value e lo sommo al generale
    if(ingredient.checked){
        somma += parseInt(ingredient.value)
    }
}

var couponOne = "12345ABCDEF";
var couponTwo = "54321ABCDEF";
var couponThree = "12345FEDCBA";
var discountActive = 0.05 // Sconto del 5% sul prezzo totale del panino

var coupon = document.getElementById("coupon");
var couponTrue = coupon.value;

if(couponTrue === couponOne || couponTrue === couponTwo || couponTrue === couponThree ){
    somma -= (somma * discountActive);
}

document.getElementById("price").innerText = somma;

}
})


