const openModalBtn = document.querySelector("[data-action='open-modal']");
const closeModalBtn = document.querySelector("[data-action='close-modal']");
const backdrop = document.querySelector(".backdrop");
const body = document.querySelector("body");

openModalBtn.addEventListener('click', () => {
    body.classList.toggle('showModal');
})
closeModalBtn.addEventListener('click', () => {
        body.classList.remove('show-modal');
})
backdrop.addEventListener('click', () => {
        body.classList.remove('show-modal');
})