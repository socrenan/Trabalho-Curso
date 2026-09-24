# Melhorias realizadas – SA03

Documento com as principais correções e refatorações aplicadas no protótipo.

## 1. Extração de CSS embutido para arquivos externos

**Antes:** cada HTML tinha um bloco `<style>` gigante dentro do próprio arquivo.

**Depois:** CSS separado por tela, na pasta `css/`:
- `css/style.css` — estilos do login
- `css/resolver-chamados.css` — estilos da tela de resolução
- `css/abrir-chamado.css` — estilos da tela de abertura

**Evidência:** `login.html`, `resolver_chamados.html`, `abrir_chamado.html`

---

## 2. Extração de JavaScript embutido para arquivos externos

**Antes:** cada HTML tinha um bloco `<script>` gigante dentro do próprio arquivo.

**Depois:** JS separado por tela, na pasta `js/`:
- `js/app.js` — lógica do login
- `js/resolver-chamados.js` — lógica de resolução de chamados
- `js/abrir-chamado.js` — lógica de abertura de chamado

**Evidência:** `login.html`, `resolver_chamados.html`, `abrir_chamado.html`

---

## 3. HTML semântico

**Antes:** uso excessivo de `<div>` para estruturar a página.

**Depois:** tags semânticas aplicadas:
- `<main>` no lugar de `<div class="container">` / `<div class="card">`
- `<header>` no lugar de `<div class="header">`
- `<section>` no lugar de `<div class="filters">`

**Evidência:** `login.html`, `resolver_chamados.html`, `abrir_chamado.html`

---

## 4. Padronização de nomes de arquivos

**Antes:** arquivos com nomes inconsistentes (`abrir_chamado.html`, `resolver_chamados.html`).

**Depois:** todos os arquivos padronizados.

**Evidência:** estrutura de pastas do repositório.

---

## 5. Organização de pastas

**Antes:** todos os arquivos na raiz do projeto.

**Depois:** estrutura organizada:
- `/css` — folhas de estilo
- `/js` — scripts JavaScript
- `/assets` — imagens e arquivos estáticos
- `/docs` — documentação

**Evidência:** estrutura de pastas do repositório.
