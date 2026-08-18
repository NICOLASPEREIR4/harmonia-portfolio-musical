# Harmonia — Portfólio Musical

Portfólio web estático sobre música, desenvolvido com **HTML5**, **CSS3** e **JavaScript** nativos. A interface é minimalista, com fundo escuro, texto claro e destaque em vermelho-laranja.

O projeto segue a especificação da atividade acadêmica: página única, responsiva, com interações em JavaScript e publicação prevista no GitHub Pages (esta etapa ainda não foi feita).

## Como abrir localmente

Não há instalação nem build.

1. Abra `index.html` no navegador, ou
2. Use a extensão Live Server (ou similar) para servir a pasta do projeto.

Arquivos obrigatórios da atividade: `index.html`, `style.css` e `script.js`.

## Estrutura

```text
.
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   └── icons/
├── README.md
└── especificacao-tecnica-portfolio-musica.md
```

| Arquivo/pasta | Função |
|---|---|
| `index.html` | Estrutura semântica da página |
| `style.css` | Identidade visual, layout e responsividade |
| `script.js` | Filtro, tema, menu, galeria, formulário e voltar ao topo |
| `assets/images/` | Ilustrações SVG originais (hero e capas) |
| `assets/icons/` | Ícones SVG |
| `README.md` | Documentação, personalizações e registro de IA |

## Seções

- **Início** — título, descrição e chamada para a curadoria
- **Música** — painel de destaque, filtros por gênero e cards
- **Sobre** — proposta do portfólio e autoria (placeholder)
- **Contato** — links públicos (placeholder) e formulário visual

## Funcionalidades JavaScript

- Filtro de conteúdos por gênero (Todos, Rock, Pop, Gospel, Rap, Outros), com mensagem se a lista ficar vazia
- Alternância entre modo escuro e claro, com persistência em `localStorage`
- Menu recolhível em telas pequenas (`Escape` fecha o menu)
- Botão “voltar ao topo”
- Galeria interativa: o card selecionado atualiza o painel de destaque
- Formulário de contato com validação e feedback no próprio navegador (não envia dados a um servidor)

## Identidade (a preencher depois)

Os trechos abaixo estão como placeholder, de propósito:

- `[Seu nome]` no Sobre e no rodapé
- GitHub, LinkedIn e e-mail com `href="#"`

Não há dados pessoais sensíveis publicados.

## Personalizações em relação à especificação

A primeira geração não copiou os exemplos literais do documento técnico. Ajustes já aplicados:

1. **Paleta** — fundo `#100c0a`, superfície `#1c1612`, texto `#f4efe8`, destaque `#e23d12` (em vez de `#0b0b0b` e `#ff5a1f`).
2. **Fontes** — Syne nos títulos e Source Sans 3 no corpo (Google Fonts).
3. **Layout** — hero em duas colunas no desktop e card em destaque maior no grid.
4. **Imagens** — SVGs originais no lugar de fotos genéricas.
5. **Textos** — redação própria, sem reutilizar o slogan de exemplo da spec.
6. **JavaScript extra** — estado vazio do filtro e painel de destaque da galeria.
7. **Formulário** — validação e mensagem de sucesso somente no cliente.

## Checklist da especificação

- [x] `index.html`, `style.css` e `script.js`
- [x] Pelo menos quatro seções
- [x] HTML semântico, variáveis CSS, Grid, Flexbox e media queries
- [x] Filtro, tema, menu, voltar ao topo e galeria
- [x] Layout pensado para computador e celular
- [x] Conteúdo revisado e sem dados pessoais sensíveis
- [x] Uso de IA documentado
- [x] Pelo menos cinco personalizações após o exemplo da spec
- [ ] Site aberto por URL pública (GitHub Pages — etapa futura)
- [ ] Repositório no GitHub (etapa futura)

## Publicação futura no GitHub Pages

Quando for a hora de publicar:

1. Criar o repositório (por exemplo `meu-portfolio-musica`).
2. Enviar `index.html`, `style.css`, `script.js`, `assets/` e `README.md`.
3. Em **Settings → Pages**, escolher *Deploy from a branch*, branch `main`, pasta `/ (root)`.
4. A URL seguirá o padrão `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`.

## Registro do uso da IA

### Prompt 1

**O que foi solicitado:** ler a especificação técnica completa e analisar o documento para implementar o que está nela.

**O que a IA sugeriu:** um plano de site estático na raiz do projeto, com seções Início, Música, Sobre e Contato, SVGs originais, JavaScript para filtro/tema/menu/galeria e GitHub Pages deixado para depois.

**Minha decisão:** aproveitar a estrutura proposta; adiar identidade pessoal e publicação; não criar subpasta `meu-portfolio-musica/`.

### Prompt 2

**O que foi solicitado:** onde criar os arquivos e qual identidade usar no site.

**O que a IA sugeriu:** opções de pasta raiz vs subpasta, e identidade genérica vs dados reais.

**Minha decisão:** criar na raiz, sem GitHub nesta etapa; deixar espaço para nome e links, para preencher depois.

### Prompt 3

**O que foi solicitado:** implementar o plano anexado, sem editar o arquivo do plano, até concluir todos os to-dos.

**O que a IA sugeriu:** HTML semântico, CSS com tema claro/escuro, SVGs, script modular e README com checklist e registro de prompts.

**Minha decisão:** aproveitar o recorte visual (Harmonia, paleta fechada, capas SVG); manter placeholders de autoria; descartar player com arquivo de áudio em favor da galeria com links externos; corrigir ícones do menu/tema para SVG inline depois de perceber que máscara CSS com traço seria frágil.

## Problemas encontrados e correções

- Ícones de menu e tema via `mask-image` em SVG de traço podiam não aparecer. Correção: SVG inline nos botões, com troca por CSS/`aria-expanded`.
- Flash de tema errado ao recarregar a página. Correção: script curto no `<head>` lendo `localStorage` antes do CSS visível.
- Formulário sem backend. Correção: `preventDefault`, validação no cliente e aviso explícito de que nada é enviado a um servidor.
