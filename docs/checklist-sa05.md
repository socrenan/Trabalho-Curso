# Checklist de Qualidade do Front-End – SA05

**Aluno:** Renan d'Ávila dos Santos
**Projeto:** Sistema de Chamados TI – MVP
**Repositório:** https://github.com/socrenan/Trabalho-Curso

---

## 4 melhorias implementadas

### 1. Mensagens de validação mais claras

- **Onde foi aplicada:** `abrir_chamado.html`, `js/abrir-chamado.js`
- **O que mudou:**
  - Antes: mensagem genérica no toast ("Preencha todos os campos obrigatórios corretamente")
  - Depois: mensagem específica embaixo de cada campo ("Campo obrigatório." ou "E-mail inválido. Verifique o formato.")
- **Evidência:** print em anexo + commit `feat: melhora mensagens de validacao por campo (SA05)`

### 2. Feedback visual de erro/sucesso

- **Onde foi aplicada:** `css/abrir-chamado.css`, `js/abrir-chamado.js`, `abrir_chamado.html`
- **O que mudou:**
  - Campo com erro: borda vermelha + mensagem
  - Campo válido: borda verde + ícone ✓
  - Botão de envio: fica verde por 2s com texto "Enviado!" após sucesso
- **Evidência:** print em anexo + commit `feat: adiciona feedback visual de sucesso nos campos e botao (SA05)`

### 3. Acessibilidade básica (foco visível)

- **Onde foi aplicada:** `css/abrir-chamado.css`
- **O que mudou:**
  - Foco reforçado com `outline` azul de 3px em todos os campos e botões
  - Melhor contraste do botão principal
  - Navegação por Tab fica visível
- **Evidência:** print em anexo + commit `feat: reforca foco visivel para acessibilidade (SA05)`

### 4. Refatoração leve (padronização de nomes)

- **Onde foi aplicada:** `js/abrir-chamado.js`
- **O que mudou:**
  - `showToast` → `exibirNotificacao`
  - `resetForm` → `limparFormulario`
  - `generateTicketNumber` → `gerarNumeroChamado`
  - `showFieldError` → `mostrarErroCampo`
  - `markFieldValid` → `marcarCampoValido`
  - `clearAllErrors` → `limparErros`
- **Evidência:** commit `refactor: padroniza nomes de funcoes em portugues (SA05)`

---

## Padrão de validação e mensagens

- **Campos obrigatórios:** "Campo obrigatório."
- **Formato inválido (e-mail):** "E-mail inválido. Verifique o formato."
- **Mensagem de sucesso:** "Chamado TI-XXXXXX-XXX aberto com sucesso!"
- **Onde está documentado:** `docs/decisoes.md`

---

## Padrões do time

Documentados em `docs/decisoes.md`:

1. Padrão de nomes (arquivos/funções/classes)
2. Padrão visual mínimo
3. Padrão de validação/mensagens
