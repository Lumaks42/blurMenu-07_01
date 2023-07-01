const content = document.querySelector('.content');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnHeader = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const btnExit = document.querySelector('.btn');
const btnReg = document.querySelector('.btn_reg');


registerLink.addEventListener('click', () => {
    content.classList.add('active');
});

loginLink.addEventListener('click', () => {
    content.classList.remove('active');
})


btnHeader.addEventListener('click', () => {
    content.classList.add('active-popup');
})

iconClose.addEventListener('click', () => {
    content.classList.add('show-popup');
})

btnReg.addEventListener('click', () => {
    content.classList.add('show-popup');
})

