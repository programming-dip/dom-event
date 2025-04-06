console.log("events.js connected .........");
// Option 2
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option 3
// option 3- declaring the required function
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// option 3- getting element by id
const btnMakeBlue = document.getElementById('btn-make-blue');
// option 3 - onclick
btnMakeBlue.onclick = makeBlue;


// option 4
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
// Option 4 getElementById.addEventListener('event type', handler function)
document.getElementById('btn-make-green').addEventListener('click', makeGreen);


document.getElementById('btn-make-gold')
    .addEventListener('click', function makeGold() {
        document.body.style.backgroundColor = 'gold';
    })


// Option 5

document.getElementById('btn-make-black')
    .addEventListener('click', function () {
        document.body.style.backgroundColor = 'black';
    })