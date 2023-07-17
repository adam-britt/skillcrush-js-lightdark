var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function() {
    fans.innerText = "123K";
});

fish.addEventListener("mouseover", function() {
    fish.innerText = "47K";
});

pets.addEventListener("mouseover", function() {
    pets.innerText = "20K";
});



var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

toggle.addEventListener("click", function() {

    if(body.classList.contains("light")) {
        body.classList.remove("light");
        ball.classList.remove("move-right");
        h1.innerHTML = "Stealth Quincy";
    } else {
        body.classList.add("light");
        ball.classList.add("move-right");
        h1.innerHTML = "Party Quincy";
    }

});



var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

modal.addEventListener("click", function() {
    if(modal.classList.contains("show-modal")) {
        modalX.classList.add("show-modal");
        modal.innerText = "You've got this!";
    } else {
        modalX.classList.remove("show-modal");
        modal.innterText = "Who's got this?";
    }
});
