# Wireframe - Massas Jucurutu

## Tipo de Layout
**Institucional / Catálogo** - Página institucional com apresentação da empresa e catálogo de produtos.

## Estrutura das Páginas

### index.html (Página Principal)
1. **Header/Navbar** (Componente composto) - Logo + links de navegação
2. **Hero** (Componente composto) - Apresentação principal com logo e slogan
3. **Quem Somos (About)** (Componente composto) - Imagem da fábrica + descrição da empresa
4. **Produtos em Destaque** (Componente composto) - Lista de produtos com cards
5. **Footer** (Componente composto) - Links, redes sociais e copyright

### Produtos.html (Catálogo)
1. **Header/Navbar**
2. **Hero** - Título "Nossos Produtos"
3. **Seção Biscoitos Tradicionais** - Lista de cards de produtos
4. **Seção Biscoitos Especiais** - Lista de cards de produtos
5. **Footer**

### QuemSomos.html
1. **Header/Navbar**
2. **Banner**
3. **História**
4. **Valores (Cards)**
5. **Chamada para produtos**
6. **Footer**

## Componentes Definidos

### Componentes Simples
- `.btn` / `.produtos-btn` / `.btn-saiba` - Botões
- `.badge` / `.hero__badge` - Badges/etiquetas
- `.nav__link` - Links de navegação
- `.footer-text` - Texto do rodapé
- `.footer-icons` - Ícones

### Componentes Compostos
- `.navbar` - Composto por logo e links
- `.hero` - Composto por badge/logo, título e texto
- `.about` - Composto por imagem e cards de texto
- `.produtos` / `.produtos-lista` - Composto por seção e lista de cards
- `.card` / `.produtos_item` - Card de produto com imagem, título e botão
- `.footer` - Composto por textos, ícones e copyright

## Uso do Flexbox
- **Navbar**: `display: flex` para alinhar logo e links
- **Hero**: `display: flex`, `flex-direction: column` para centralizar conteúdo
- **About**: `display: flex` para layout lado a lado (imagem + texto)
- **Produtos-lista**: `display: flex`, `flex-wrap: wrap`, `gap` para grid responsivo
- **Footer**: `display: flex` para organizar elementos
- **Cards e seções**: Uso de Flexbox para alinhamento e distribuição
