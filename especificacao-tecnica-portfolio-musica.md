# Especificação Técnica — Portfólio Web sobre Música

## 1. Visão geral

Este projeto consiste no desenvolvimento de um portfólio web temático sobre música, utilizando exclusivamente tecnologias front-end nativas: **HTML5, CSS3 e JavaScript**.

O site deverá apresentar uma interface moderna e minimalista, com predominância de preto e branco e elementos de destaque em laranja/vermelho. O objetivo é criar um espaço para descoberta e apresentação de conteúdos relacionados à música, podendo incluir curadoria, opiniões, artistas, gêneros, playlists e produção própria.

O projeto deverá ser versionado no **GitHub** e publicado gratuitamente utilizando **GitHub Pages**.

A especificação segue os requisitos da atividade acadêmica, que determina a utilização de `index.html`, `style.css` e `script.js`, além da publicação do projeto na internet por meio do GitHub Pages.

---

## 2. Objetivos

### Objetivo geral

Desenvolver e publicar um portfólio web responsivo sobre música, demonstrando conhecimentos fundamentais de HTML, CSS, JavaScript, Git e GitHub.

### Objetivos específicos

- Estruturar uma página web utilizando HTML5 semântico.
- Criar uma identidade visual moderna e minimalista utilizando CSS3.
- Implementar funcionalidades interativas com JavaScript.
- Desenvolver uma interface responsiva para computadores e dispositivos móveis.
- Organizar o projeto utilizando boas práticas de desenvolvimento front-end.
- Versionar o código utilizando Git e GitHub.
- Publicar o site utilizando GitHub Pages.
- Personalizar o resultado gerado com apoio de IA.
- Testar e validar o funcionamento do site antes da entrega.

---

## 3. Tecnologias necessárias

### 3.1 HTML5

Responsável pela estrutura e organização semântica do conteúdo.

Elementos esperados:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- títulos e textos
- links
- botões
- imagens
- formulários, quando aplicável

Arquivo principal:

```text
index.html
```

### 3.2 CSS3

Responsável pela apresentação visual, identidade gráfica, layout, responsividade e animações.

Recursos previstos:

- CSS Variables
- Flexbox
- CSS Grid
- Media Queries
- Transitions
- Animations
- estados `:hover` e `:focus`
- tipografia
- espaçamento
- cards
- botões
- navegação responsiva

Arquivo principal:

```text
style.css
```

### 3.3 JavaScript

Responsável pela interatividade e comportamento dinâmico da aplicação.

Arquivo principal:

```text
script.js
```

Funcionalidades previstas:

1. Filtro de conteúdos por gênero/tipo.
2. Alternância entre modo claro e escuro.
3. Menu responsivo.
4. Botão "voltar ao topo".
5. Galeria ou player interativo de músicas/playlists.
6. Mensagens ou estados dinâmicos quando necessário.

A implementação poderá ser ajustada durante o desenvolvimento, mantendo pelo menos uma funcionalidade JavaScript funcional, conforme exigido pela atividade.

### 3.4 Git

Utilizado para controle de versão do projeto.

Operações principais:

```bash
git init
git add .
git commit -m "feat: cria estrutura inicial do portfólio"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

### 3.5 GitHub

Será utilizado para:

- armazenar o código-fonte;
- controlar versões;
- manter o histórico de alterações;
- disponibilizar o projeto publicamente;
- hospedar o site por meio do GitHub Pages.

### 3.6 GitHub Pages

Serviço utilizado para publicar o projeto como uma página web estática.

A aplicação não dependerá de um servidor backend para funcionar.

A URL final seguirá o padrão:

```text
https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/
```

---

## 4. Estrutura de arquivos

A estrutura mínima recomendada é:

```text
meu-portfolio-musica/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

### Descrição

| Arquivo/Pasta | Responsabilidade |
|---|---|
| `index.html` | Estrutura principal da página |
| `style.css` | Estilos, layout e responsividade |
| `script.js` | Interações e funcionalidades |
| `assets/images/` | Imagens utilizadas no projeto |
| `assets/icons/` | Ícones e recursos gráficos |
| `README.md` | Documentação do projeto |

Os três arquivos obrigatórios da atividade são:

- `index.html`
- `style.css`
- `script.js`

---

## 5. Arquitetura da interface

O site deverá ser organizado em pelo menos quatro áreas principais.

### 5.1 Header / Navegação

Responsabilidades:

- apresentar a identidade/nome do projeto;
- disponibilizar navegação;
- permitir acesso às principais seções;
- possuir comportamento responsivo;
- disponibilizar o controle de tema claro/escuro.

Estrutura conceitual:

```text
HEADER
├── Logo/Nome
├── Menu
│   ├── Início
│   ├── Música/Conteúdos
│   ├── Sobre
│   └── Contato
└── Botão de tema
```

### 5.2 Seção inicial

Deverá apresentar:

- título principal;
- breve descrição;
- chamada para exploração do conteúdo;
- elemento visual relacionado à música;
- botão de ação.

Exemplo conceitual:

```text
Explore o universo da música
Descubra artistas, gêneros e conteúdos.

[Explorar conteúdos]
```

### 5.3 Seção de conteúdos musicais

Será a principal área interativa.

Cada conteúdo poderá possuir:

- imagem;
- título;
- artista ou categoria;
- descrição;
- gênero;
- tipo de conteúdo;
- botão ou link para informações adicionais.

A seção deverá permitir filtragem utilizando JavaScript.

Exemplo:

```text
[Todos] [Rock] [Pop] [Gospel] [Rap] [Outros]

┌────────────┐ ┌────────────┐ ┌────────────┐
│   Imagem   │ │   Imagem   │ │   Imagem   │
│   Música   │ │   Música   │ │   Música   │
│ Descrição  │ │ Descrição  │ │ Descrição  │
└────────────┘ └────────────┘ └────────────┘
```

### 5.4 Seção Sobre

Deverá apresentar a proposta do portfólio e os interesses relacionados ao tema musical.

### 5.5 Seção Contato

Poderá disponibilizar:

- GitHub;
- LinkedIn;
- e-mail profissional;
- formulário visual de contato.

Não devem ser publicados dados pessoais sensíveis.

### 5.6 Footer

Deverá conter informações básicas do projeto, como:

- nome do projeto;
- ano;
- links relevantes;
- indicação de autoria.

---

## 6. Identidade visual

### Paleta

A identidade visual deverá seguir o planejamento da Etapa 1:

- **Preto:** fundo principal e elementos de contraste.
- **Branco:** textos e superfícies claras.
- **Laranja/vermelho:** cor de destaque para ações e elementos interativos.

A implementação deverá utilizar variáveis CSS para facilitar alterações futuras.

Exemplo:

```css
:root {
    --color-background: #0b0b0b;
    --color-surface: #151515;
    --color-text: #ffffff;
    --color-text-muted: #b5b5b5;
    --color-accent: #ff5a1f;
}
```

Os valores acima são uma referência inicial e poderão ser personalizados durante a implementação.

---

## 7. Responsividade

O site deverá funcionar adequadamente em:

- computadores;
- notebooks;
- tablets;
- smartphones.

O CSS deverá utilizar Media Queries para adaptar:

- menu;
- grid de conteúdos;
- tamanho de fontes;
- espaçamentos;
- botões;
- imagens;
- organização das seções.

O desenvolvimento deverá priorizar uma abordagem **mobile-first** ou, no mínimo, garantir uma boa adaptação para telas pequenas.

---

## 8. Funcionalidades JavaScript

### 8.1 Filtro de conteúdos

O usuário poderá selecionar um gênero ou tipo de conteúdo.

Fluxo:

```text
Usuário seleciona filtro
        ↓
JavaScript identifica a categoria
        ↓
Cards são filtrados
        ↓
Somente conteúdos correspondentes são exibidos
```

### 8.2 Modo claro/escuro

O botão de tema deverá alternar as variáveis de cores utilizadas pela interface.

Fluxo:

```text
Clique no botão
      ↓
JavaScript altera o estado do tema
      ↓
CSS aplica as novas variáveis
      ↓
Interface muda de aparência
```

### 8.3 Menu responsivo

Em telas menores, o menu poderá ser recolhido e aberto por meio de um botão.

### 8.4 Voltar ao topo

Um botão deverá permitir que o usuário retorne rapidamente ao início da página após rolar o conteúdo.

### 8.5 Player ou galeria interativa

Caso seja implementado um player, ele deverá utilizar recursos compatíveis com uma aplicação web estática.

Uma alternativa mais simples é utilizar uma galeria interativa de músicas/playlists com informações e links externos.

---

## 9. Boas práticas

### HTML

- utilizar HTML semântico;
- manter hierarquia correta de títulos;
- utilizar `alt` nas imagens;
- evitar elementos desnecessários;
- manter o código organizado.

### CSS

- utilizar variáveis CSS;
- evitar repetição excessiva;
- organizar estilos por componentes/seções;
- utilizar classes com nomes claros;
- manter responsividade.

### JavaScript

- utilizar funções pequenas e específicas;
- utilizar nomes de variáveis descritivos;
- evitar código duplicado;
- separar lógica de comportamento da estrutura HTML;
- adicionar tratamento para elementos que possam não existir.

---

## 10. Acessibilidade

Sempre que possível, deverão ser aplicadas práticas básicas de acessibilidade:

- contraste adequado;
- textos alternativos para imagens;
- navegação por teclado;
- foco visual em elementos interativos;
- botões com textos compreensíveis;
- estrutura semântica adequada;
- evitar depender somente de cores para transmitir informações.

---

## 11. SEO básico

O `index.html` deverá possuir:

- `title`;
- `meta description`;
- `meta viewport`;
- estrutura adequada de títulos;
- textos descritivos;
- `alt` nas imagens.

Exemplo:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfólio web sobre música.">
    <title>Portfólio Musical</title>
</head>
```

---

## 12. Compatibilidade com GitHub Pages

O projeto deverá ser uma aplicação web estática.

Não serão necessários:

- Node.js;
- banco de dados;
- servidor backend;
- PHP;
- frameworks obrigatórios;
- build obrigatório.

O arquivo `index.html` deverá estar disponível na estrutura que será utilizada pelo GitHub Pages.

---

## 13. Fluxo de desenvolvimento

```text
Planejamento
     ↓
Criação da estrutura HTML
     ↓
Desenvolvimento do CSS
     ↓
Implementação do JavaScript
     ↓
Teste local
     ↓
Personalização
     ↓
Git
     ↓
GitHub
     ↓
Configuração do GitHub Pages
     ↓
Publicação
     ↓
Teste da URL pública
```

---

## 14. Processo de versionamento

Repositório sugerido:

```text
meu-portfolio-musica
```

Fluxo básico:

```bash
git init
git add .
git commit -m "feat: cria estrutura inicial"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Durante o desenvolvimento, recomenda-se realizar commits pequenos e descritivos.

Exemplos:

```text
feat: cria estrutura HTML
feat: adiciona identidade visual
feat: implementa filtro de músicas
feat: adiciona modo escuro
fix: corrige menu mobile
style: ajusta responsividade
docs: adiciona documentação
```

---

## 15. Publicação no GitHub Pages

### Passo 1 — Criar o repositório

Criar um novo repositório no GitHub, por exemplo:

```text
meu-portfolio-musica
```

### Passo 2 — Enviar o projeto

Enviar:

```text
index.html
style.css
script.js
assets/
README.md
```

### Passo 3 — Configurar o GitHub Pages

No repositório:

```text
Settings
   ↓
Pages
   ↓
Build and deployment
   ↓
Source: Deploy from a branch
   ↓
Branch: main
   ↓
Folder: / (root)
   ↓
Save
```

### Passo 4 — Aguardar a publicação

Após o processamento do GitHub Pages, o site deverá ficar disponível em uma URL semelhante a:

```text
https://SEU_USUARIO.github.io/meu-portfolio-musica/
```

---

## 16. Testes finais

Antes da entrega, verificar:

- [ ] O site abre pela URL pública.
- [ ] `index.html` carrega corretamente.
- [ ] `style.css` está sendo aplicado.
- [ ] `script.js` está funcionando.
- [ ] O menu funciona.
- [ ] O filtro funciona.
- [ ] O modo claro/escuro funciona.
- [ ] O botão voltar ao topo funciona.
- [ ] As imagens aparecem.
- [ ] Os links funcionam.
- [ ] O layout funciona no computador.
- [ ] O layout funciona no celular.
- [ ] Não existem informações pessoais sensíveis.
- [ ] O conteúdo foi revisado.
- [ ] O uso de IA foi documentado.

---

## 17. Personalizações obrigatórias

A primeira versão gerada com auxílio da IA não deverá ser considerada a versão final.

Deverão ser realizadas pelo menos cinco modificações ou personalizações, podendo incluir:

1. alteração da paleta de cores;
2. alteração das fontes;
3. reorganização do layout;
4. substituição ou inclusão de imagens;
5. alteração dos textos;
6. criação de novos cards;
7. alteração do menu;
8. melhoria do CSS;
9. modificação do JavaScript;
10. inclusão de uma nova funcionalidade.

Essas alterações deverão ser registradas para demonstrar a participação autoral no desenvolvimento.

---

## 18. Registro do uso da IA

Deverão ser registrados pelo menos três prompts utilizados durante o desenvolvimento.

Para cada prompt, documentar:

### Prompt

O que foi solicitado à IA?

### Resposta da IA

O que a IA sugeriu?

### Minha decisão

Registrar:

- o que foi aproveitado;
- o que foi modificado;
- o que foi descartado;
- erros encontrados;
- como os problemas foram corrigidos.

Fluxo esperado:

```text
PROMPT
  ↓
GERAÇÃO
  ↓
ANÁLISE
  ↓
TESTE
  ↓
ERRO
  ↓
CORREÇÃO
  ↓
PERSONALIZAÇÃO
  ↓
PUBLICAÇÃO
```

---

## 19. Entregáveis

Ao final do projeto deverão ser obtidos:

### Site publicado

```text
https://SEU_USUARIO.github.io/meu-portfolio-musica/
```

### Repositório

```text
https://github.com/SEU_USUARIO/meu-portfolio-musica
```

### Código

```text
index.html
style.css
script.js
```

### Documentação

Registro dos prompts, decisões, modificações, problemas encontrados e respectivas soluções.

---

## 20. Critérios técnicos de conclusão

O projeto será considerado tecnicamente concluído quando:

- possuir `index.html`, `style.css` e `script.js`;
- apresentar pelo menos quatro seções;
- possuir design moderno e responsivo;
- possuir funcionalidade JavaScript;
- tiver sido personalizado após a primeira geração da IA;
- estiver versionado no GitHub;
- estiver publicado no GitHub Pages;
- funcionar por meio da URL pública;
- tiver seu uso de IA documentado;
- não expuser informações pessoais sensíveis.

---

## 21. Stack final

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura e semântica |
| CSS3 | Estilização, layout e responsividade |
| JavaScript | Interatividade |
| Git | Controle de versão |
| GitHub | Repositório |
| GitHub Pages | Hospedagem/publicação |

### Dependências externas

Nenhuma dependência externa é obrigatória.

O projeto deverá ser capaz de funcionar como uma aplicação web estática utilizando HTML, CSS e JavaScript.
