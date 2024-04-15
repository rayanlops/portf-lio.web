const hamburger = document.querySelector('#hamburger')
const nav = document.querySelector('#navegar')
const fecharmn = document.getElementById('fecharmenu')
const fechar = document.querySelector('.btn0')
const fechar1 = document.querySelector('.btn1')
const fechar2 = document.querySelector('.btn2')
const fechar3 = document.querySelector('.btn3')

hamburger.addEventListener('click', () => nav.classList.toggle('active') );
fecharmn.addEventListener('click', () => nav.classList.remove('active') );
hamburger.addEventListener('click', () => fecharmn.classList.toggle('ativar'));
fecharmn.addEventListener('click', () => fecharmn.classList.toggle('ativar'));
fechar.addEventListener('click', () => nav.classList.remove('active'));
fechar.addEventListener('click', () => fecharmn.classList.remove('ativar'));

fechar1.addEventListener('click', () => nav.classList.remove('active'));
fechar1.addEventListener('click', () => fecharmn.classList.remove('ativar'));

fechar2.addEventListener('click', () => nav.classList.remove('active'));
fechar2.addEventListener('click', () => fecharmn.classList.remove('ativar'));

fechar3.addEventListener('click', () => nav.classList.remove('active'));
fechar3.addEventListener('click', () => fecharmn.classList.remove('ativar'));