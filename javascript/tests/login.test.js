const { login } = require("../sistema");
test("Login válido", () => {
  const result = login("ana@email.com", "123456");
  expect(result).toBe("Login realizado");
});
test("Login inválido", () => {
  const result = login("ana@email.com", "000000");
  expect(result).toBe("Credenciais inválidas");
});
