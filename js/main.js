'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let buttonFire = document.getElementById("firing-button");
let rocket = document.getElementById("rocket");
const billboard = document.getElementById("billboard");
const times = document.querySelector("span");

let seconde = 10
let updateSpeed = 1000;
let timerId;



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
document.addEventListener("DOMContentLoaded", function () { 
    times.innerText = `${formatNumber(seconde)}`;

    buttonFire.addEventListener("click", function () {
        rocket.src = "images/rocket2.gif";
        buttonFire.classList.add("disabled");
        
        setInterval(() => {
            updatechrono();
        }, 1000);
    });    
});
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function updatechrono() {
    if (seconde >0) {
        seconde--;
    }
    times.innerText = `${formatNumber(seconde)}`;

    if (seconde === 0) {
        rocket.src = "images/rocket3.gif";
        rocket.classList.add("tookOff");
    }
}

/**
 * @param {valeur de décompte} num 
 * @returns 
 */
function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}
