document.addEventListener("keypress", function (evt) {
    creaSuono(evt.key);
    animePulsante(evt.key);
});

for (i = 0; i < document.querySelectorAll(".batteria").length; i++) {
    document.querySelectorAll(".batteria")[i].addEventListener("click", function () {
     
        var buttonInnerHTML = this.innerHTML;
        creaSuono(buttonInnerHTML);
        animePulsante(buttonInnerHTML);

    })
};

function creaSuono(key) {
    switch (key) {
        case "w": 
        var rullante = new Audio("suoni-batteria/rullante.mp3");
            rullante.play();
        break;
        case "a": 
        var charleston = new Audio("suoni-batteria/charleston.wav");
            charleston.play();
        break;
        case "s": 
        var grancassa = new Audio("suoni-batteria/grancassa.mp3");
            grancassa.play();
        break;
        case "d": 
        var tom1 = new Audio("suoni-batteria/tom-1.mp3");
            tom1.play();
         break;
        case "j": 
        var tom2 = new Audio("suoni-batteria/tom-2.mp3");
            tom2.play();
         break;
        case "k": 
        var tom3 = new Audio("suoni-batteria/tom-3.mp3");
            tom3.play();
         break;
        case "l": 
        var crash = new Audio("suoni-batteria/crash.mp3");
            crash.play();
            break;
        default:
            console.log(key);
    };
};

function animePulsante(tastoCorrente) {
    let pulsanteAttivo = document.querySelector("." + tastoCorrente);
    pulsanteAttivo.classList.add("premuto");

    setTimeout(function () { pulsanteAttivo.classList.remove("premuto"); }, 300);
}