# Decisões e Padrões do Time – SA05

Este documento registra os padrões mínimos adotados no projeto após o refinamento da SA05.

---

## 1. Padrão de nomes

**Arquivos:**
- Tudo em minúsculo
- Palavras separadas por hífen (`kebab-case`)
- Exemplos: `abrir-chamado.css`, `resolver-chamados.js`, `abrir_chamado.html`

**Funções JavaScript:**
- `camelCase` (primeira palavra minúscula, próximas com maiúscula)
- Nomes em português, descritivos
- Exemplos: `exibirNotificacao`, `limparFormulario`, `gerarNumeroChamado`

**Classes CSS:**
- `kebab-case`
- Nomes descritivos, sem abreviações obscuras
- Exemplos: `.form-group`, `.field-error`, `.btn-submit`

**IDs no HTML:**
- `camelCase`
- Exemplos: `solicitanteError`, `btnSubmit`, `toastMessage`

---

## 2. Padrão visual mínimo

**Espaçamento:**
- Base de 8px (`0.5rem`), com múltiplos: 16px, 24px, 32px
- Espaço entre campos do formulário: 24px (`1.5rem`)

**Botões:**
- Primário: fundo azul (`#1550e6`), texto branco, border-radius 16px
- Secundário: fundo cinza claro (`#eef2f7`), texto escuro
- Todos com altura mínima consistente e ícone à esquerda quando aplicável

**Avisos e mensagens:**
- Erro: sempre abaixo do campo, cor `#d1453b`, tamanho 0.82rem
- Sucesso: sempre via toast no rodapé, ícone verde
- Nunca usar alert() nativo do navegador

**Cores principais:**
- Azul principal: `#1a5cff` (foco) / `#1550e6` (botão)
- Vermelho de erro: `#d1453b`
- Verde de sucesso: `#10b981`
- Fundo geral: gradiente `#f0f4fa` a `#d9e2ed`

---

## 3. Padrão de validação e mensagens

**Validação de campos obrigatórios:**
- Mensagem: `"Campo obrigatório."`
- Aplicada quando o campo está vazio no submit

**Validação de formato (e-mail):**
- Mensagem: `"E-mail inválido. Verifique o formato."`
- Regex usada: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

**Mensagem de sucesso:**
- Formato: `"Chamado {numero} aberto com sucesso!"`
- Exibida via toast após envio bem-sucedido

**Feedback visual:**
- Erro: borda vermelha + mensagem embaixo do campo
- Válido: borda verde + ícone ✓ à direita
- Botão: fica verde por 2s com texto "Enviado!" após sucesso

**Acessibilidade:**
- Todos os campos têm `label` associado via `for`/`id`
- Foco visível com `outline` de 3px azul
- Navegação por teclado (Tab) funcional
