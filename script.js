const enviarForm = document.querySelector('#form-botao');
const emailForm = document.querySelector('#form-email');
const senhaForm = document.querySelector('#form-senha');

function enviarFormAlert() {
  if (emailForm.value === 'tryber@teste.com' && senhaForm.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

enviarForm.addEventListener('click', enviarFormAlert);
