from sistema import cadastrar_usuario

def test_cadastro_valido():
    assert cadastrar_usuario("Ana", "ana@email.com", "123456") == "Usuário cadastrado com sucesso!"
def test_cadastro_senha_curta():
    assert cadastrar_usuario("João", "joao@email.com", "123") == "Dados inválidos: senha muito curta"