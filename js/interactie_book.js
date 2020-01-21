/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/* MICRO INTERACTIE OPSLAAN */
var bookmarkpng = document.querySelector(".bookmark1");
var bookmarkgroenpng = document.querySelector(".bookmark2");

function icoonOpslaan() {
    bookmarkpng.classList.toggle("bookmark1");
    bookmarkgroenpng.classList.toggle("bookmark2active");
}

bookmarkpng.addEventListener("click", icoonOpslaan);
bookmarkgroenpng.addEventListener("click", icoonOpslaan);
