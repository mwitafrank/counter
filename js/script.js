//a function for incrementing the counter variable
let counter = 0;
let countVar = document.getElementById("counting");

function increment() {
    counter = counter + 1;
    countVar.innerText = counter;
}