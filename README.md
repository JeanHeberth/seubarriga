Este projeto automatiza testes funcionais na aplicação [Seu Barriga](https://seubarriga.wcaquino.me) utilizando o framework Cypress.

---

## ✨ Tecnologias e Ferramentas

- ✅ **Cypress** — Testes de ponta a ponta
- ✅ **Faker.js** — Geração de dados dinâmicos
- ✅ **Mochawesome** — Relatórios detalhados em HTML/JSON

---

## 📁 Estrutura de Pastas

```
cypress/
├── e2e/                  # Testes automatizados
├── support/              # Commands customizados
├── reports/              # Relatórios JSON (ignorado pelo Git)
├── screenshots/          # Prints automáticos (ignorado pelo Git)
└── videos/               # Gravações dos testes (ignorado pelo Git)
mochawesome-report/       # Relatório final (ignorado pelo Git)
```
## ⚙️ Configuração de ambiente

Crie o arquivo `cypress.env.json` na raiz do projeto para armazenar suas credenciais de login:

```json
{
  "EMAIL": "seu_email_valido_no_seubarriga@gmail.com",
  "PASSWORD": "sua_senha_valida_no_seubarriga",
}
```
---

## ⚙️ Instalação

```bash
git clone https://github.com/JeanHeberth/seubarriga.git
cd seubarriga
npm install
```

---

## ▶️ Como Executar os Testes

### Modo interativo (GUI)

```bash
npx cypress open
```

### Modo headless (linha de comando)

```bash
npx cypress run
```

---

## 📊 Gerar Relatório com Mochawesome

Após rodar os testes com `npx cypress run`, execute:

```bash
npm run report
```

Isso irá:
- Mesclar os arquivos `.json` gerados
- Criar o relatório em `mochawesome-report/mochawesome.html`

Abra o relatório com:

```bash
open mochawesome-report/mochawesome.html
```

---

## 📜 Scripts

```json
"scripts": {
  "report:merge": "npx mochawesome-merge mochawesome-report/*.json > mochawesome.json",
  "report:generate": "npx mochawesome-report-generator mochawesome.json -o mochawesome-report",
  "report": "npm run report:merge && npm run report:generate"
}
```