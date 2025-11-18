# Testes de Sistema – Atividade Final

Este repositório reúne a implementação de um sistema simples de cadastro e login, incluindo testes manuais, testes automatizados em JavaScript (Jest) e testes automatizados em Python (Pytest). O objetivo principal é validar o comportamento funcional do sistema e demonstrar domínio de técnicas de teste de software.

---

## 1. Objetivo do Projeto

- Validar o correto funcionamento das regras de negócio do cadastro e login.
- Executar e documentar testes manuais.
- Implementar testes automatizados para garantir repetibilidade e cobertura básica.
- Registrar evidências de execução (prints).
- Produzir um relatório final consolidando os resultados.

---

## 2. Estrutura do Projeto
```
├── sistema.js # Implementação JS (cadastro e login)
├── sistema.py # Implementação Python (cadastro)
├── tests/
│ ├── cadastro.test.js # Testes Jest do cadastro
│ └── login.test.js # Testes Jest do login
└── test_cadastro.py # Testes Pytest do cadastro

```
---

## 3. Funcionalidades Implementadas

### 3.1 sistema.js

#### Função: cadastrarUsuario(nome, email, senha)
Regras avaliadas:

1. Todos os campos devem ser fornecidos.  
2. O email deve conter o caractere `"@"`.  
3. A senha deve possuir no mínimo **6 caracteres**.  
4. Em caso de conformidade, retorna: **"Usuário cadastrado com sucesso!"**.

#### Função: login(email, senha)
Credenciais válidas definidas no código:

- **email:** `ana@email.com`
- **senha:** `123456`

Regras:

1. Se os dados coincidirem com os valores acima → retorna **"Login realizado"**.  
2. Caso contrário → **"Credenciais inválidas"**.

---

### 3.2 sistema.py

#### Função: cadastrar_usuario(nome, email, senha)
Regras idênticas à versão JavaScript:

1. Campos obrigatórios.  
2. Email deve conter `"@"`.  
3. Senha mínima de 6 caracteres.  
4. Em caso de conformidade → **"Usuário cadastrado com sucesso!"**.

---

## 4. Testes Automatizados

### 4.1 Testes Jest (JavaScript)

**Arquivos:**
- `tests/cadastro.test.js`
- `tests/login.test.js`

**Objetivos:**
- Garantir que as funções JS retornam exatamente as mensagens esperadas.
- Validar comportamento tanto para cenários válidos quanto inválidos.

**Execução:**
```bash
npm install
npx jest
```

### 4.2 Testes Pytest (Python)

Arquivo:
```
test_cadastro.py
```

## Objetivo:

Validar o fluxo de cadastro na implementação Python.

Execução:

```
pip install pytest
pytest
```

## 5. Testes Manuais
### 5.1 CT01 – Cadastro com sucesso

Objetivo: Verificar fluxo completo de cadastro válido.

Entrada:

nome="Ana"

email="ana@email.com
"

senha="123456"

Resultado Esperado:
"Usuário cadastrado com sucesso!"

Resultado Obtido:

Status:

### 5.2 CT02 – Cadastro com senha curta

Objetivo: Garantir que o sistema rejeita senhas com menos de 6 caracteres.

Entrada:

nome="João"

email="joao@email.com
"

senha="123"

Resultado Esperado:
"Dados inválidos: senha muito curta"

Resultado Obtido:

Status:

### 5.3 CT03 – Login com sucesso

Objetivo: Validar autenticação com credenciais corretas.

Entrada:

email="ana@email.com
"

senha="123456"

Resultado Esperado:
"Login realizado"

Resultado Obtido:

Status:

## 6. Evidências

Inclua aqui as capturas de tela da execução:

Execução do sistema manualmente.

Execução dos testes Jest.

Execução dos testes Pytest.

## 7. Relatório Final
Nome:
Turma:
Objetivo dos Testes:

Descrever de forma objetiva o propósito da validação (ex.: verificar comportamento correto diante de entradas válidas, inválidas e limites).

Técnicas Utilizadas:

Teste funcional.

Teste caixa-preta.

Teste baseado em requisitos.

Testes automatizados (unitários) com Jest e Pytest.

Evidências:

Inserir prints ou links referentes às execuções.

## Conclusão:

Resumo direto dos resultados, apontando conformidades, falhas encontradas (se houver) e comportamento geral do sistema.
