🦙 Lhama Atómica - E-Commerce Store

Bem-vindo ao repositório da Lhama Atómica, uma loja online moderna desenvolvida em React, focada em performance, design responsivo e uma experiência de utilizador fluida.

🚀 Funcionalidades de Destaque

1. Experiência de Checkout Imersiva (Color Run Animation)
- Efeito Visual Dinâmico: Ao finalizar uma compra, o utilizador é recebido com uma animação de "explosão de pó colorido", simulando uma Color Run.
- Engine de Partículas CSS: Utilização de keyframes dinâmicos e radial-gradients gerados aleatoriamente via React para criar uma atmosfera de celebração única a cada acesso.
- Glassmorphism: O cartão de sucesso utiliza backdropFilter: 'blur(20px)', permitindo que as explosões de cor brilhem suavemente através da interface.

2. Gestão de Estado Otimizada (Zero-Loop Context)
- CartContext Estável: Implementação de useCallback em todas as funções globais (addToCart, clearCart, etc.), eliminando re-renderizações desnecessárias e garantindo a estabilidade das páginas dependentes.
- Persistência Inteligente: Sincronização automática com o localStorage para manter o carrinho ativo entre sessões.

3. Matriz de Produtos e Layout de Alta Precisão
- Grelha 4-Column Stable: Implementação rigorosa de CSS Grid que mantém 4 produtos por linha em desktop, adaptando-se para 3 em tablets e 1-2 em mobile sem qualquer desalinhamento.
- Interface Sticky: O resumo do carrinho e botões de ação permanecem fixos durante o scroll, facilitando a conversão e finalização da compra.

4. Sistema de Temas Dinâmicos (Multi-Theme Engine)
- 🔵 Marítimo: Elegância clássica com tons de azul marinho profundo.
- 🌸 Pink Sakura: Design suave e estético inspirado na primavera.
- 🌑 Dark Mode (Deep Slate): Interface otimizada para ambientes de baixa luminosidade, focada no conforto visual.
- Troca Hot-Swap: Alternância instantânea de temas via Context API sem necessidade de recarregar a aplicação.

5. Estabilidade Visual (Anti-Jitter)
S- crollbar Gutter: Utilização de scrollbar-gutter: stable para prevenir o "salto" lateral do conteúdo quando o utilizador navega entre páginas de diferentes comprimentos.

🛠️ Stack Tecnológica
- Core: React 18 com Vite
- Linguagem: TypeScript (Verbatim Module Syntax)
- UI Framework: Material UI (MUI)
- Routing: React Router Dom v6
- State Management: React Context API & Hooks (useCallback, useMemo, useEffect)

📦 Instalação e Execução

- Clonar o repositório:
git clone https://github.com/NightShadexil/LojaOnlineFrontend

- Instalar dependências:
npm install

- Executar em modo de desenvolvimento:
npm run dev

- Build para produção:
npm run build

📂 Estrutura de Pastas Relevante
- /public: Contém o ícone oficial da loja e assets estáticos.
- /src/components: Componentes reutilizáveis (Navbar, ProductCard, etc).
- /src/pages: Páginas principais (Home, Detalhes, Carrinho).
- /src/context: Lógica de estado do carrinho.
- /src/theme.ts: Definição dos três temas MUI.

Nota Final: A Lhama Atómica não é apenas uma loja, é um estudo sobre como a estabilidade técnica — impulsionada pelo TypeScript e Hooks bem geridos — pode coexistir com animações vibrantes e design experimental. Este projeto foi desenvolvido com um foco rigoroso no detalhe visual, garantindo que elementos como a barra de scroll ou a troca dinâmica de cores não afetem a estabilidade do layout, proporcionando assim uma experiência de compra premium e fluida.