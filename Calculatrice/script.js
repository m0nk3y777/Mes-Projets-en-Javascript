const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
const btnplus = document.getElementById("+");
const btnmoins = document.getElementById("-");
const btndiv = document.getElementById("/");
const btnmult = document.getElementById("*");
const btnegal = document.getElementById("=");
const btnc = document.getElementById("c");

let res = document.getElementById("res");
let premierNb = 0;
let op = "";
let resultat = 0;

btn1.addEventListener("click", function(){
    console.log("Bouton 1 appuyé");
    res.value += "1";
    console.log(res.value);
})
btn2.addEventListener("click", function(){
    console.log("Bouton 2 appuyé");
    res.value += "2";
    console.log(res.value);
})
btn3.addEventListener("click", function(){
    console.log("Bouton 3 appuyé");
    res.value += "3";
    console.log(res.value);
})
btn4.addEventListener("click", function(){
    console.log("Bouton 4 appuyé");
    res.value += "4";
    console.log(res.value);
})
btn5.addEventListener("click", function(){
    console.log("Bouton 5 appuyé");
    res.value += "5";
    console.log(res.value);
})
btn6.addEventListener("click", function(){
    console.log("Bouton 6 appuyé");
    res.value += "6";
    console.log(res.value);
})
btn7.addEventListener("click", function(){
    console.log("Bouton 7 appuyé");
    res.value += "7";
    console.log(res.value);
})
btn8.addEventListener("click", function(){
    console.log("Bouton 8 appuyé");
    res.value += "8";
    console.log(res.value);
})
btn9.addEventListener("click", function(){
    console.log("Bouton 9 appuyé");
    res.value += "9";
    console.log(res.value);
})
btn0.addEventListener("click", function(){
    console.log("Bouton 0 appuyé");
    res.value += "0";
    console.log(res.value);
})

btnc.addEventListener("click", function(){
    console.log("Bouton correction appuyé");
    res.value = "";
    op = "";
    premierNb = 0;
    console.log(res.value);
})

btnplus.addEventListener("click", function(){
    console.log("Bouton + appuyé");
    premierNb = parseInt(res.value);
    res.value = "" ;
    console.log("Votre premier numéro est : ",premierNb);
    op = "+";
})
btnmoins.addEventListener("click", function(){
    console.log("Bouton - appuyé");
    premierNb = parseInt(res.value);
    res.value = "" ;
    console.log("Votre premier numéro est : ",premierNb);
    op = "-";
})
btndiv.addEventListener("click", function(){
    console.log("Bouton / appuyé");
    premierNb = parseInt(res.value);
    res.value = "" ;
    console.log("Votre premier numéro est : ",premierNb);
    op = "/";
})
btnmult.addEventListener("click", function(){
    console.log("Bouton * appuyé");
    premierNb = parseInt(res.value);
    res.value = "" ;
    console.log("Votre premier numéro est : ",premierNb);
    op = "*";
})
btnegal.addEventListener("click", function(){
    console.log("Bouton = appuyé");
    console.log("Le calcul est : ",premierNb + op + res.value);
    if (op == "+"){
        resultat = premierNb + parseInt(res.value);
        console.log("Les resultat est ",resultat);
    }   
    else if (op == "-"){
        resultat = premierNb - parseInt(res.value);
        console.log("Les resultat est ",resultat);
    }
    else if (op == "*"){
        resultat = premierNb * parseInt(res.value);
        console.log("Les resultat est ",resultat);
    }
    else {
         resultat = premierNb / parseInt(res.value);
        console.log("Les resultat est ",resultat);
    }
    res.value = resultat;
})





