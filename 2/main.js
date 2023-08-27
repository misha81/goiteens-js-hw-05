const radio1 = document.querySelector('#radio1');
const radio2 = document.querySelector('#radio2');
const radio3 = document.querySelector('#radio3');
const body = document.querySelector('body')

radio1.addEventListener("click", () => {
    body.style.backgroundColor = 'Red';
});
radio2.addEventListener("click", () => {
    body.style.backgroundColor = 'White';
});
radio3.addEventListener("click", () => {
    body.style.backgroundColor = 'Green';
});