const buttonLogin = document.querySelector('#button-login');
const mensagem = document.querySelector('#mensagem-login');

buttonLogin.addEventListener('click', function () {
  mensagem.textContent = 'Login em desenvolvimento';
  mensagem.style.display = 'block';
});