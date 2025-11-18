const { cadastrarUsuario } = require("../sistema");
test("Cadastro válido", () => {
  const result = cadastrarUsuario("Ana", "ana@email.com", "123456");
  expect(result).toBe("Usuário cadastrado com sucesso!");
});
test("Cadastro com senha curta", () => {
  const result = cadastrarUsuario("João", "joao@email.com", "123");

  expect(result).toBe("Dados inválidos: senha muito curta");
});
