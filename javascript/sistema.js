function cadastrarUsuario(nome, email, senha) {
  if (!nome || !email || !senha) return "Dados incompletos";
  if (!email.includes("@")) return "E-mail inválido";
  if (senha.length < 6) return "Dados inválidos: senha muito curta";
  return "Usuário cadastrado com sucesso!";
}

function login(email, senha) {
  const emailCorreto = "ana@email.com";
  const senhaCorreta = "123456";
  if (email === emailCorreto && senha === senhaCorreta) {
    return "Login realizado";
  }
  return "Credenciais inválidas";
}
module.exports = { cadastrarUsuario, login };
