//console.log(window, {document});
let title = document.getElementById('title');
console.log({title});

setTimeout(() => {
    title.innerText = 'Goodbye Js';
    title.classList.add('green');
    //title.style.background = 'coral';
}, 5000);

let r, g, b;
setInterval(() => {
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
    if(title.classList.contains('green')) {
        title.classList.replace('green', 'red');
    } else {
        title.classList.replace('green', 'red');
    }
}, 500);

let textInput = document.querySelector('#textInput');
textInput.addEventListener('input', evt => {
    console.log(evt);
    title.innerText = textInput.value.split('').reverse().join(''); 
})