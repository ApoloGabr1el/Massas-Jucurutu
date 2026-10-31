# Massas-Jucurutu

## Informações do Projeto
- **Nome do projeto:** Massas Jucurutu
- **Tema escolhido:** Página institucional/catálogo da indústria de biscoitos e massas alimentícias Massas Jucurutu
- **Tipo de layout escolhido:** Institucional / Catálogo (Landing page com apresentação da empresa e catálogo de produtos)
- **Disciplina:** Design Web 1M
- **Data de entrega:** 31/10/2026
- **Formato:** Trabalho em grupo

## Objetivo da Página
Desenvolver uma interface web autoral para a marca Massas Jucurutu, aplicando a metodologia BEM (Block, Element, Modifier), componentes reutilizáveis e Flexbox para organização do layout, com objetivo de apresentar a empresa e seu catálogo de produtos.

## Componentes Simples
- **Botões:** `.produtos-btn`, `.btn-saiba` - Botões para ações e navegação
- **Badge:** `.hero__badge` - Etiqueta/identificador visual
- **Links de navegação:** `.nav__link` - Links do menu de navegação
- **Texto do rodapé:** `.footer-text` - Links/informações do footer
- **Ícones:** `.footer-icons` - Ícones de redes sociais

## Componentes Compostos
- **Navbar (Cabeçalho):** Componente com logo e links de navegação
- **Hero:** Composto por logo/badge, título e texto descritivo
- **About/Quem Somos:** Composto por imagem da fábrica e cards com informações da empresa
- **Card de Produto (`.produtos_item`):** Composto por imagem, título do produto e botão
- **Lista de Produtos (`.produtos-lista`):** Composto por múltiplos cards de produtos organizados com Flexbox
- **Footer:** Composto por links, ícones de redes sociais e copyright
- **Seções do Catálogo:** Headers com ícones, títulos e descrições

## Uso do Flexbox
O Flexbox foi utilizado em diversos pontos do projeto:
- **Navbar:** Alinhamento horizontal do logo e links de navegação
- **Hero:** Layout em coluna com centralização (`flex-direction: column`, `align-items: center`)
- **About:** Layout lado a lado entre imagem e texto (`display: flex`)
- **Lista de Produtos (`.produtos-lista`):** Organização em linha com quebra (`display: flex`, `flex-wrap: wrap`, `gap`)
- **Footer:** Alinhamento e distribuição dos elementos
- **Cards e seções:** Alinhamento e espaçamento dos componentes

## Estrutura do Projeto
- `index.html` - Página principal
- `Produtos.html` - Página de catálogo de produtos
- `QuemSomos.html` - Página sobre a empresa
- `componentes.html` - Biblioteca de componentes
- `css/style.css` - Arquivo CSS principal (importa os componentes)
- `components/` - Componentes CSS modulares (BEM)
- `assets/` - Imagens e logotipos
- `docs/diario-de-bordo.md` - Diário de bordo com registro do processo e uso de IA
- `docs/wireframe.md` - Wireframe e planejamento do projeto

## Diário de Bordo
O registro completo do desenvolvimento e decisões do grupo está em: [docs/diario-de-bordo.md](docs/diario-de-bordo.md)

## Observações sobre o Uso de IA
O projeto foi desenvolvido de forma autoral pelo grupo. A IA foi utilizada apenas para consultas pontuais quando necessário, com todas as decisões e adaptações feitas pelos integrantes. O uso foi registrado no diário de bordo.

## Instruções para Abrir o Projeto

1. Clone o repositório
2. Inicie um servidor local na pasta do projeto:

   ```bash
   python -m http.server 8000
   ```

3. Abra `http://localhost:8000` no navegador
4. Navegue entre as páginas através do menu de navegação

> **Importante:** não abra o `index.html` diretamente pelo navegador (`file://`). A navbar e o rodapé são carregados via `fetch`, e o navegador bloqueia essas requisições quando o arquivo é aberto localmente — a página aparece sem menu e sem rodapé. Por isso é necessário usar o servidor local.

## Padrão Utilizado
- **Metodologia:** BEM (Block, Element, Modifier)
- **Layout:** Flexbox
- **Tecnologias:** HTML5, CSS3 (sem frameworks)


