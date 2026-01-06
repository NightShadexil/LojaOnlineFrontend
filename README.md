🦙 Lhama Atómica - E-Commerce Store

Bem-vindo ao repositório da Lhama Atómica, uma loja online moderna desenvolvida em React, focada em performance, design responsivo e uma experiência de utilizador fluida.

🚀 Funcionalidades Principais

1. Catálogo Dinâmico e Matriz Estável

Grelha de 4 Colunas: Implementação de uma matriz de produtos rigorosa utilizando CSS Grid, garantindo que em ecrãs desktop sejam sempre exibidos 4 produtos por linha sem desalinhamentos.

Filtro por Categorias: Navegação intuitiva entre diferentes tipos de produtos com atualização instantânea da grelha.

Responsividade Total: Layout adaptável para tablets (3 colunas) e smartphones (1 ou 2 colunas).

2. Gestão de Carrinho Profissional

Layout de Duas Colunas: Lista de itens à esquerda e resumo financeiro à direita.

Resumo Sticky: A área de totalizadores e finalização de compra permanece visível (fixa no topo direito) mesmo durante o scroll de listas longas de compras.

Persistência de Dados: Integração com localStorage para garantir que o utilizador não perde os seus produtos ao atualizar a página.

3. Sistema de Temas Dinâmicos (Multi-Theme)

Três Modos Visuais:

🔵 Marítimo: Azul marinho profundo e fundos suaves.

🌸 Pink Sakura: Tons rosados elegantes.

🌑 Dark Mode: Interface de alto contraste para uso noturno (Deep Slate).

Troca em Tempo Real: Botão de paleta na Navbar que alterna instantaneamente entre temas sem recarregar a página.

Otimização de Contraste: Garantia de legibilidade em todos os cartões e áreas de texto, independentemente do fundo selecionado.

4. Estabilidade Visual (Zero-Jitter)

Fixed Scrollbar: Utilização de scrollbar-gutter: stable e CSS crítico no index.html para impedir que a Navbar e o conteúdo "saltitem" lateralmente ao navegar entre páginas de diferentes tamanhos.

Favicon e Branding: Integração do logótipo da Lhama Atómica na aba do navegador e na identidade visual da aplicação.

🛠️ Tecnologias Utilizadas

React (Vite)

TypeScript (com Verbatim Module Syntax para maior segurança de tipos)

Material UI (MUI) (Sistema de temas e componentes base)

React Router Dom (Gestão de rotas)

Context API (Gestão de estado global do carrinho)

CSS Grid & Flexbox (Estruturação de layout estável)

📦 Instalação e Execução

Clonar o repositório:
git clone https://github.com/NightShadexil/LojaOnlineFrontend

Instalar dependências:
npm install

Executar em modo de desenvolvimento:
npm run dev

Build para produção:
npm run build

📂 Estrutura de Pastas Relevante

/public: Contém o ícone oficial da loja e assets estáticos.

/src/components: Componentes reutilizáveis (Navbar, ProductCard, etc).

/src/pages: Páginas principais (Home, Detalhes, Carrinho).

/src/context: Lógica de estado do carrinho.

/src/theme.ts: Definição dos três temas MUI.

Nota Final: Este projeto foi desenvolvido com foco no detalhe visual, garantindo que elementos como a barra de scroll ou a troca de cores não afetem a estabilidade do layout, proporcionando uma experiência de compra premium.