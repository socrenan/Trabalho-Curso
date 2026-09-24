# Template de Entrega – SA03

**UC:** Desenvolvimento de Sistemas
**SA03:** Padronização e melhoria do protótipo Front-End
**Equipe:** ( X ) individual  ( ) grupo
**Integrantes:**
1. Renan d'Ávila dos Santos

**Turma:** (preencher)
**Datas (2 aulas):** 23/09/2026 e 24/09/2026

---

## 1) Links obrigatórios
- **Repositório:** https://github.com/socrenan/Trabalho-Curso
- **Quadro de tarefas:** https://trello.com/b/ycfEkwW5H/meu-quadro-do-trello

---

## 2) Evidências obrigatórias

### 2.1 Print 1 — Quadro de tarefas (melhorias SA03)
- ( X ) Link do print/anexo: [print do Trello com 11 cards na coluna Concluído]

### 2.2 Evidência de versionamento (commits)
- Link da página de commits: https://github.com/socrenan/Trabalho-Curso/commits/main
- Quantidade aproximada de commits da SA03: **18**
- Padrão de mensagem usado: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`

### 2.3 Evidência de "antes e depois" (mínimo 3 pontos)
- ( X ) descrição objetiva no README
- ( X ) arquivo `/docs/melhorias.md` com antes/depois

**Evidências:**
- **Evidência 1:** Extração de CSS — `docs/melhorias.md` + `login.html`
- **Evidência 2:** Extração de JS — `docs/melhorias.md` + `js/app.js`
- **Evidência 3:** HTML semântico — `docs/melhorias.md` + `index.html`

---

## 3) Organização do projeto

### 3.1 Estrutura de pastas/arquivos
- ( X ) Separação de CSS/JS/assets
- ( X ) Nomes de arquivos padronizados
- ( X ) Remoção de arquivos soltos/desnecessários

**Estrutura final:**
```
/ (raiz)
├── login.html
├── abrir_chamado.html
├── resolver_chamados.html
├── css/ (style.css, abrir-chamado.css, resolver-chamados.css)
├── js/ (app.js, abrir-chamado.js, resolver-chamados.js)
├── assets/
└── docs/ (checklist-boas-praticas.md, melhorias.md)
```

---

## 4) Checklist de Boas Práticas

- ( X ) Anexei o PDF no AVA
- ( X ) Está no repositório em `/docs/checklist-boas-praticas.md`

### 4.1 Seis boas práticas adotadas:
1. Separação de CSS e JS em arquivos próprios
2. HTML semântico (`<main>`, `<header>`, `<section>`)
3. Organização de pastas (`css/`, `js/`, `assets/`, `docs/`)
4. Nomes consistentes de arquivos (kebab-case)
5. Comentários úteis no código (cabeçalhos)
6. Commits por tarefa do quadro

### 4.2 Onde foi aplicado:
`index.html`, `css/style.css`, `js/app.js`, `docs/melhorias.md`

---

## 5) Depuração e correções

| Nº | Problema identificado | Correção realizada | Evidência |
|----|----------------------|-------------------|-----------|
| 1 | CSS embutido em cada HTML | Extraído para `css/*.css` | `docs/melhorias.md` |
| 2 | JS embutido em cada HTML | Extraído para `js/*.js` | `docs/melhorias.md` |
| 3 | HTML pouco semântico | Aplicado `<main>`, `<header>`, `<section>` | `login.html` |
| 4 | Arquivos soltos na raiz | Organizado em `/css`, `/js`, `/assets`, `/docs` | Estrutura do repo |

---

## 6) README e documentação
- README atualizado com resumo das melhorias: ( X ) sim
- Onde está o resumo? ( X ) no próprio README

---

## 7) Participação em sala
- ( X ) alta

**Observações:** Trabalhei individualmente, fazendo todas as etapas de padronização, extração de CSS/JS e documentação.

---

## 8) Declaração de autoria
( X ) Declaramos que as melhorias e a documentação entregues foram produzidas pelo grupo nesta SA, com registro no repositório e no quadro de tarefas.

**Assinaturas:** Renan d'Ávila dos Santos
