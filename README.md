# 🍝 eFood

Aplicação de delivery de comida (e-commerce), inspirada em plataformas como iFood, 
desenvolvida com React e TypeScript.

🔗 **Demo:** https://efood-six-roan.vercel.app

## 📋 Funcionalidades

- Vitrine com múltiplos restaurantes, cada um com nota de avaliação e tags de categoria (ex: italiana, árabe) e destaque ("Destaque da semana")
- Página individual de cada restaurante com cardápio de pratos (imagem, descrição e preço)
- Carrinho de compras com cálculo de valor total
- Checkout em duas etapas:
  - **Entrega:** nome do destinatário, endereço, cidade, CEP, número e complemento
  - **Pagamento:** dados do cartão (nome, número, CVV, validade)
- Navegação fluida entre etapas do checkout (carrinho → entrega → pagamento)

## 🛠️ Tecnologias

- **React** (Create React App)
- **TypeScript**
- Consumo de API (fetch) para dados de restaurantes e produtos

## 🚀 Como rodar

\`\`\`bash
git clone https://github.com/pedrof777/efood.git
cd efood
npm install
npm start
\`\`\`

Acesse em `http://localhost:3000`.

## 📌 Sobre o projeto

Projeto desenvolvido para praticar consumo de API, gerenciamento de estado 
(carrinho de compras) e fluxo de checkout em múltiplas etapas com React e TypeScript. 
Simulação de compra — sem processamento real de pagamento.
