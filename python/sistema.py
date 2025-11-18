def cadastrar_usuario(nome, email, senha):
    if not nome or not email or not senha:
        return "Dados incompletos"
    if "@" not in email:
        return "E-mail inválido"
    if len(senha) < 6:
        return "Dados inválidos: senha muito curta"
    return "Usuário cadastrado com sucesso!"