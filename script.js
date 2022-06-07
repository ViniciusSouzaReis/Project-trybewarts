const enviarForm = document.querySelector('#form-botao');
const emailForm = document.querySelector('#form-email');
const senhaForm = document.querySelector('#form-senha');
const buttonSubmit = document.querySelector('#submit-btn');
const inputCheck = document.querySelectorAll('input')[24];
buttonSubmit.disabled = true;

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

inputCheck.addEventListener('change', verificaStatus);
enviarForm.addEventListener('click', enviarFormAlert);
