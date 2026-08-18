# Harmonia — Portfólio Musical

Portfólio web estático sobre música, desenvolvido com **HTML5**, **CSS3** e **JavaScript** nativos. A interface é minimalista, com fundo escuro, texto claro e destaque em vermelho-laranja.

O projeto segue a especificação da atividade acadêmica: página única, responsiva, com interações em JavaScript, versionada no GitHub e publicada no GitHub Pages.

- Site: https://nicolaspereir4.github.io/harmonia-portfolio-musical/
- Repositório: https://github.com/NICOLASPEREIR4/harmonia-portfolio-musical

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

## Identidade

- Autoria: **Nicolas Leal Pereira** (Sobre e rodapé)
- GitHub do projeto: [NICOLASPEREIR4/harmonia-portfolio-musical](https://github.com/NICOLASPEREIR4/harmonia-portfolio-musical)
- E-mail: nicolaslealpereira@gmail.com
- LinkedIn continua como placeholder (`href="#"`)

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
- [x] Site aberto por URL pública (GitHub Pages)
- [x] Repositório no GitHub

## GitHub e GitHub Pages

Repositório público `harmonia-portfolio-musical`, branch `main`, pasta `/ (root)`.

1. `git init` na branch `main` e commit inicial.
2. Login no GitHub CLI (`gh auth login`).
3. `gh repo create harmonia-portfolio-musical --public --source=. --remote=origin --push`.
4. GitHub Pages ativado em **Settings → Pages**: *Deploy from a branch*, `main`, `/ (root)`.

URLs:

- https://github.com/NICOLASPEREIR4/harmonia-portfolio-musical
- https://nicolaspereir4.github.io/harmonia-portfolio-musical/

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
- `*.md` estava no gitignore global da máquina, então `README.md` e a spec não iam no primeiro `git add`. Correção: `git add -f` nesses arquivos, sem alterar a config global do Git.
