function mostrarSenha() {
  var inputSenha = document.querySelector("#senha");
  if (inputSenha.type === "password") {
    inputSenha.type = "text";
  } else {
    inputSenha.type = "password";
  }
}

function pegaDadosDoForm() {
  var inputLogin = document.querySelector("#login");
  var inputSenha = document.querySelector("#senha");

  verificaInputs(inputSenha, inputLogin);

  return {
    login: inputSenha.value.trim(),
    senha: inputLogin.value,
  };
}

function verificaInputs(inputSenha, inputLogin) {
  if (!inputSenha.value) {
    inputLogin.placeholder = "Digite um nome de usuário";
  }

  if (!inputLogin.value) {
    inputSenha.placeholder = "Digite uma senha";
  }

  if (!inputSenha.value || !inputLogin.value) {
    throw "Usuário e senha inválidos";
  }
}

function registrar(event) {
  var dados = pegaDadosDoForm();

  dados.senha.match(dados.login)
    ? alert("Por favor, insira uma senha que não contenha o nome de usuário")
    : alert("Registro efetuado com sucesso");
}
