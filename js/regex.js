//função para exibir / ocultar o campo da senha
function mostrarSenha() {
  var inputSenha = document.querySelector("#senha");
  if (inputSenha.type === "password") {
    inputSenha.type = "text";
  } else {
    inputSenha.type = "password";
  }
}

function registrar() {
  //captura as entradas nos campos de usuário e senha
  const usuario = document.querySelector("#usuario").value;
  const senha = document.querySelector("#senha").value;

  //identifica se usuário e senha estão preenchidos
  if (!usuario || !senha) return;

  //identifica com regex se a senha contém a mesma string do usuário
  senha.match(usuario)
    ? alert("Por favor, insira uma senha que não contenha o nome de usuário")
    : alert("Registro efetuado com sucesso");
}
