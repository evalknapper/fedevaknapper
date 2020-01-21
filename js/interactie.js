/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


/* Bolletje laten verschijnen na mouseover*/

var save = document.getElementById("save");

save.addEventListener("mouseover", bolletjeVerschijnen, false);

console.log(save)

var bolletje = document.getElementById('bolletje')

console.log(bolletje)

function bolletjeVerschijnen() {

    bolletje.classList.remove("hidden");
    bolletje.classList.add("visible")

    console.log("het werkt");
}
