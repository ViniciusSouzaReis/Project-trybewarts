const enviarForm = document.querySelector('#form-botao');
const emailForm = document.querySelector('#form-email');
const senhaForm = document.querySelector('#form-senha');
const buttonSubmit = document.querySelector('#submit-btn');
const inputCheck = document.querySelectorAll('input')[24];
const paragraph = document.querySelector('p');
const textArea = document.querySelector('textarea');
buttonSubmit.disabled = true;
const counter = 500;
paragraph.innerHTML = `Caracteres: ${counter}`;

function enviarFormAlert() {
  if (emailForm.value === 'tryber@teste.com' && senhaForm.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function verificaStatus() {
  if (inputCheck.checked === true) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

function contadorDeCaracters() {
  paragraph.innerText = `Caracteres: ${counter - document.querySelector('textarea').value.length}`;
}

textArea.addEventListener('keyup', contadorDeCaracters);
inputCheck.addEventListener('change', verificaStatus);
enviarForm.addEventListener('click', enviarFormAlert);
