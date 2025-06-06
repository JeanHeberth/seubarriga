# 💻 Desafio Técnico – Automação Cypress | Plataforma Seu Barriga

Este repositório contém a automação de testes E2E com Cypress para a plataforma [https://seubarriga.wcaquino.me](https://seubarriga.wcaquino.me), como parte de um desafio técnico.

---

## 🚀 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) – para geração de dados aleatórios
- Node.js 20+

---

## 📦 Instalação

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/seubarriga-cypress.git
cd seubarriga-cypress

# Instale as dependências
npm install
```

---

## ⚙️ Configuração de ambiente

> As variáveis de ambiente estão centralizadas no arquivo `cypress.env.json`.  
> **Este arquivo está no `.gitignore`**, portanto crie manualmente com o conteúdo abaixo:

```json
{
  "EMAIL": "seu_email_valido@gmail.com",
  "PASSWORD": "sua_senha_valida"
}
```

---

## 🧪 Executando os testes

### ✅ Teste de login com sucesso

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

Ou para modo interativo:

```bash
npx cypress open
```

> Este teste utiliza o login válido definido no `cypress.env.json`.

---

### ❌ Teste de login com falha

Este teste usa dados gerados com Faker e valida que o sistema **não permite login de usuários inválidos**.

Ele está no mesmo arquivo de testes de login.

---

## 📂 Estrutura do projeto

```
cypress/
├── e2e/
│   └── login.cy.js         # Testes de login com sucesso e falha
├── fixtures/
│   └── usuarios.json       # (Opcional) massa de dados
├── support/
│   ├── commands.js         # Comandos customizados (ex: login, validarAlerta)
│   └── e2e.js              # Importa os comandos
cypress.config.js           # Configuração do Cypress
cypress.env.json            # Variáveis de ambiente locais
```

---

## 📌 Em desenvolvimento

Este projeto está sendo desenvolvido passo a passo. As próximas etapas incluem:

- [ ] Criação e manipulação de contas
- [ ] Movimentações financeiras
- [ ] Validações avançadas e fluxos alternativos
- [ ] Relatórios com Mochawesome

---

## 🧑‍💼 Autor

Desenvolvido por [Jean Heberth](https://github.com/jeanheberth), como parte de um desafio técnico de automação de testes.

---
