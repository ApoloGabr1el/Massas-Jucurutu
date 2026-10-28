# Projeto em Grupo — Biblioteca de Componentes e Layout com Flexbox

- **Data de entrega:** 31/10/2026
- **Disciplina:** Design Web 1M
- **Valor:** 50 pontos
- **Formato:** Trabalho em grupo
- **Entrega:** Repositório no GitHub

## Contexto

Nas unidades anteriores, estudamos a criação de componentes de interface com HTML e CSS, o uso de classes reutilizáveis, variantes, composição de componentes e organização visual de páginas.

Neste projeto, cada grupo deverá construir uma interface web simples, autoral e organizada, aplicando a lógica de componentes, o padrão BEM e o uso de Flexbox para construção de layout.

O objetivo não é criar uma página muito complexa. O foco está em demonstrar organização, clareza, reutilização de código e capacidade de transformar componentes em uma página funcional.

## Objetivo Geral

Construir um projeto web autoral em grupo, contendo uma biblioteca de componentes com padrão BEM e uma página principal organizada com Flexbox.

## Objetivos Específicos

- Definir um tema e um tipo de layout para a página.
- Criar uma pequena biblioteca de componentes reutilizáveis.
- Aplicar o padrão BEM na nomeação das classes CSS.
- Utilizar Flexbox para organizar seções, componentes e grupos de elementos.
- Compor componentes simples em componentes maiores.
- Registrar o processo de desenvolvimento no GitHub.
- Registrar o uso de IA em um diário de bordo.

## Organização Dos Grupos

O projeto deverá ser realizado em grupos de 3 a 4 estudantes.

Cada grupo deverá organizar internamente as responsabilidades, garantindo que todos participem do planejamento, implementação, documentação e revisão do projeto.

## Tema Do Projeto

O grupo deverá escolher um tema autoral e viável para ser desenvolvido em aproximadamente 20 dias.

Sugestões de tema:

- landing page de evento;
- página de cafeteria;
- página institucional simples;
- catálogo de produtos;
- catálogo de serviços;
- página de ONG;
- portfólio da turma;
- página de apresentação de curso;
- página de clube, equipe ou comunidade;
- página de campanha escolar.

O tema deve ser definido pelo grupo e registrado no `README.md` do projeto.

## Tipo De Layout

Antes de iniciar a implementação, o grupo deverá escolher um tipo de layout para orientar a construção da página.

Exemplos:

| Tipo de layout | Descrição |
| --- | --- |
| Landing page | Página de apresentação com chamada principal, seções e ação final. |
| Catálogo | Página com lista de produtos, serviços, projetos ou conteúdos. |
| Institucional | Página com apresentação, serviços, equipe e contato. |
| Portfólio | Página com apresentação pessoal ou coletiva e projetos em destaque. |
| Evento | Página com informações, programação, local e inscrição. |

O layout escolhido deve aparecer no planejamento do grupo e orientar a estrutura da página.

## Requisitos Obrigatórios

O projeto deverá conter:

- HTML e CSS em arquivos separados.
- Uma página principal chamada `index.html`.
- Uma página de biblioteca ou catálogo de componentes chamada `componentes.html`.
- Um arquivo CSS principal chamado `style.css`.
- Pelo menos 5 componentes simples.
- Pelo menos 2 componentes compostos.
- Uso do padrão BEM nas classes CSS.
- Uso obrigatório de Flexbox na construção do layout.
- Pelo menos 1 componente com variantes visuais.
- Pelo menos 1 estado interativo, como `:hover` ou `:focus`.
- README com descrição do projeto.
- Diário de bordo registrando o processo e o uso de IA.
- Histórico de entregas parciais no GitHub.

## Componentes Simples

O grupo deverá criar pelo menos 5 componentes simples.

Exemplos:

- botão;
- badge;
- card;
- campo de formulário;
- link de navegação;
- avatar;
- alerta;
- etiqueta;
- grupo de ações.

Cada componente deve ter uma classe base clara.

Exemplo:

```css
.btn {
  padding: 10px 16px;
  border-radius: 8px;
}

.btn--primary {
  background-color: #2563eb;
  color: white;
}
```

## Componentes Compostos

O grupo deverá criar pelo menos 2 componentes compostos.

Um componente composto combina elementos ou componentes menores.

Exemplos:

- navbar com logo, links e botão;
- card de produto com imagem, badge, texto e botão;
- card de perfil com avatar, nome, descrição e ações;
- seção hero com badge, título, texto e botão;
- bloco de contato com campos e botão.

Exemplo de composição:

```html
<article class="card card--featured">
  <span class="badge badge--new">Novo</span>
  <h2 class="card__title">Projeto da Turma</h2>
  <p class="card__text">Descrição curta do projeto.</p>
  <a class="btn btn--primary" href="#">Ver detalhes</a>
</article>
```

## Padrão BEM

As classes devem seguir o padrão BEM:

| Parte | Função | Exemplo |
| --- | --- | --- |
| Bloco | Componente principal | `.card` |
| Elemento | Parte interna do componente | `.card__title` |
| Modificador | Variante ou estado visual | `.card--featured` |

Exemplos válidos:

```
.card
.card__title
.card__text
.card--featured
.btn
.btn--primary
.btn--secondary
```

Evite nomes genéricos como:

```
.caixa1
.azul
.coisa
.texto-bonito
```

## Uso De Flexbox

O projeto deverá usar Flexbox para organizar partes importantes da página.

Exemplos de uso:

- navbar;
- hero;
- lista de cards;
- grupo de botões;
- seção de serviços;
- rodapé;
- alinhamento de imagem e texto.

Exemplo:

```css
.card-list {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
```

O layout deve ficar preferencialmente no container, não dentro do componente.

## Uso De IA

A IA poderá ser utilizada durante o projeto para:

- tirar dúvidas conceituais;
- sugerir nomes de classes;
- sugerir estrutura de componentes;
- revisar trechos de código;
- ajudar a encontrar erros;
- sugerir melhorias de organização.

O uso da IA não substitui a autoria do grupo. O projeto deve ser autoral, compreendido e defendido pelos integrantes.

Todo uso de IA deverá ser registrado no diário de bordo.

## Diário De Bordo

O grupo deverá criar um arquivo chamado:

```
docs/diario-de-bordo.md
```

Esse arquivo deve registrar o desenvolvimento do projeto e o uso de IA.

Modelo de registro:

| Data | Integrantes envolvidos | O que foi feito | Uso de IA | Decisão do grupo |
| --- | --- | --- | --- | --- |
| 12/10 | Nome dos estudantes | Definição do tema e layout | Pedimos sugestões de seções para uma landing page | Escolhemos hero, cards e contato |
| 16/10 | Nome dos estudantes | Criação dos componentes iniciais | Perguntamos sobre nomes BEM para botões e cards | Adaptamos os nomes ao nosso projeto |

Quando usar IA, registre:

- ferramenta utilizada;
- pergunta ou solicitação feita;
- resposta aproveitada;
- alterações feitas pelo grupo;
- decisão final adotada.

## Entregas Parciais No GitHub

O projeto será acompanhado por entregas parciais no GitHub.

Cada entrega parcial deve aparecer no histórico do repositório por meio de commits organizados.

| Data limite | Entrega parcial | Evidência esperada no GitHub |
| --- | --- | --- |
| 13/10 | Repositório criado e tema definido | `README.md` inicial com tema, integrantes e tipo de layout. |
| 17/10 | Planejamento do layout e componentes | Wireframe ou descrição em `docs/wireframe.md`; lista de componentes no README. |
| 22/10 | Primeira versão da biblioteca de componentes | `componentes.html` e CSS inicial com componentes simples. |
| 27/10 | Página principal montada com Flexbox | `index.html` usando os componentes e layout com Flexbox. |
| 31/10 | Entrega final | Repositório completo, README final e diário de bordo atualizado. |

As entregas parciais fazem parte da avaliação. Commits feitos apenas no último dia não demonstram acompanhamento do processo.

## Estrutura Sugerida Do Repositório

```
projeto/
├── index.html
├── componentes.html
├── css/
│   └── style.css
├── imagens/
├── docs/
│   ├── diario-de-bordo.md
│   └── wireframe.md
└── README.md
```

O grupo pode adaptar essa estrutura, desde que a organização seja clara e os arquivos principais estejam fáceis de localizar.

## README Do Projeto

O arquivo `README.md` deve conter:

- nome do projeto;
- integrantes do grupo;
- tema escolhido;
- tipo de layout escolhido;
- objetivo da página;
- lista de componentes simples;
- lista de componentes compostos;
- explicação de onde Flexbox foi utilizado;
- link ou descrição do diário de bordo;
- observações sobre o uso de IA;
- instruções para abrir o projeto.

## Critérios De Avaliação

| Critério | Pontuação |
| --- | --- |
| Planejamento, tema, layout escolhido e organização inicial do repositório | 5 pontos |
| Biblioteca de componentes com padrão BEM | 10 pontos |
| Componentes simples e compostos funcionando e reutilizados | 10 pontos |
| Uso de Flexbox e construção do layout da página | 10 pontos |
| Autoria, coerência visual e acabamento geral | 5 pontos |
| Diário de bordo e registro do uso de IA | 5 pontos |
| Entregas parciais e histórico no GitHub | 5 pontos |
| **Total** | **50 pontos** |

### Detalhamento Dos Critérios

| Critério | O que será observado |
| --- | --- |
| Planejamento | Tema claro, tipo de layout definido, proposta viável e documentação inicial. |
| Biblioteca de componentes | Uso correto de classes base, elementos, modificadores e organização do CSS. |
| Componentes | Quantidade mínima, reutilização real, variantes e composição entre componentes. |
| Flexbox e layout | Organização de seções, alinhamentos, espaçamentos, containers e fluxo visual. |
| Autoria e acabamento | Projeto próprio, coerência entre tema e visual, revisão e funcionamento básico. |
| Diário de bordo | Registro do processo, decisões do grupo e uso de IA de forma transparente. |
| GitHub | Commits distribuídos ao longo do período e evidências das entregas parciais. |

## Restrições

- Não usar frameworks CSS prontos, como Bootstrap, Tailwind, Materialize ou similares.
- Não entregar apenas imagem, print ou protótipo visual.
- Não copiar projeto pronto da internet.
- Não entregar código que o grupo não consiga explicar.
- Não substituir o trabalho autoral por código gerado integralmente por IA.

## Forma De Entrega

Cada grupo deverá entregar o link do repositório no GitHub, conforme orientação do professor.

O repositório deve estar público ou acessível ao professor no momento da correção.

**Entrega final:** 31/10/2026.

## Resultado Esperado

Ao final do projeto, o grupo deverá demonstrar que consegue transformar componentes reutilizáveis em uma página organizada, aplicando HTML, CSS, BEM e Flexbox de forma simples, clara e autoral.
