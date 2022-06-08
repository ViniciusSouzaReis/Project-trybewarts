const enviarForm = document.querySelector('#form-botao');
const emailForm = document.querySelector('#form-email');
const senhaForm = document.querySelector('#form-senha');
const buttonSubmit = document.querySelector('#submit-btn');
const inputCheck = document.querySelectorAll('input')[24];
const paragraph = document.querySelector('p');
const textArea = document.querySelector('textarea');
const main = document.querySelector('main');
const body = document.querySelector('body');
const nameInput = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const casa = document.querySelector('#house');
const subject = document.querySelectorAll('.subject');
const rate = document.querySelectorAll('.avaliacao');
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

function checkChecked() {
  let phrase = null;
  if (document.querySelectorAll('input')[5].checked === true) {
    phrase = `Família: ${document.querySelectorAll('input')[5].value}`;
  } else if (document.querySelectorAll('input')[6].checked === true) {
    phrase = `Família: ${document.querySelectorAll('input')[6].value}`;
  } else if (document.querySelectorAll('input')[7].checkChecked === true) {
    phrase = `Família: ${document.querySelectorAll('input')[7].value}`;
  }
  return phrase;
}

function checkMatters() {
  let phrase = 'Matérias:';
  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked === true) {
      phrase += ` ${subject[i].value}, `;
    }
  }
  return phrase;
}

function checkRate() {
  let phrase = null;
  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked === true) {
      phrase = `Avaliação: ${rate[i].value}`;
    }
  }
  return phrase;
}

function createNewDivFunc() {
  const createNewDiv = document.createElement('div');
  createNewDiv.id = 'form-data';
  body.appendChild(createNewDiv);
  const getDiv = document.querySelector('#form-data');
  const createParagraph = document.createElement('p');
  createParagraph.innerText = `Nome: ${nameInput.value} ${lastName.value}`;
  getDiv.appendChild(createParagraph);
  const createParagraph2 = document.createElement('p');
  createParagraph2.innerText = `Email: ${email.value}`;
  getDiv.appendChild(createParagraph2);
  const createParagraph3 = document.createElement('p');
  createParagraph3.innerText = `Casa: ${casa.value}`;
  getDiv.appendChild(createParagraph3);
}

function preventDefault(e) {
  e.preventDefault();
  createNewDivFunc();
  const getDiv = document.querySelector('#form-data');
  const createParagraph4 = document.createElement('p');
  createParagraph4.innerText = checkChecked();
  getDiv.appendChild(createParagraph4);
  const createParagraph5 = document.createElement('p');
  createParagraph5.innerText = checkMatters();
  getDiv.appendChild(createParagraph5);
  const createParagraph6 = document.createElement('p');
  createParagraph6.innerText = checkRate();
  getDiv.appendChild(createParagraph6);
  const createParagraph7 = document.createElement('p');
  createParagraph7.innerText = `Observações: ${document.querySelector('textarea').value}`;
  getDiv.appendChild(createParagraph7);
  main.style.display = 'none';
}

buttonSubmit.addEventListener('click', preventDefault);
textArea.addEventListener('keyup', contadorDeCaracters);
inputCheck.addEventListener('change', verificaStatus);
enviarForm.addEventListener('click', enviarFormAlert);
