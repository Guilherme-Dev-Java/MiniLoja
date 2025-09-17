# 🛍️ Loja React - 4 Abordagens de CSS

Este projeto implementa a **mesma tela de e-commerce** em **4 versões diferentes**, cada uma utilizando uma técnica distinta de estilização em React:

1. **CSS Global**  
2. **CSS Modules**  
3. **Tailwind CSS**  
4. **Styled-components**

A tela contém:

- **Navbar fixa**: logo, toggle de tema claro/escuro (com persistência em `localStorage` usando ícone Yin-Yang), badge do carrinho.  
- **Grid de produtos responsivo**:  
  - ≤480px → 1 coluna  
  - 481–768px → 2 colunas  
  - 769–1024px → 3 colunas  
  - ≥1025px → 4 colunas  
- **Cards de produtos** (60 produtos paginados, 12 por página):  
  - Imagem real (via Unsplash)  
  - Título com duas linhas e ellipsis  
  - Preço  
  - Rating (★)  
  - Tag (“Novo”, “Promo”, “Destaque”)  
  - Botão “Adicionar” (variantes solid, outline, ghost)  
- **Página de detalhes** de cada produto  
- **Skeleton loaders** (simulando carregamento)  
- **Dark mode aplicado em cores/sombras/bordas**  
- **Acessibilidade**: navegação por teclado, `aria-*`, contraste ≥ 4.5:1  
- **Animações**: transições suaves (150–250ms)  

---

## 📂 Estrutura do Projeto

.
├── 01-css-global/
├── 02-css-modules/
├── 03-tailwind/
├── 04-styled-components/
└── README.md


Cada pasta é um projeto **independente** (feito com [Vite](https://vitejs.dev/)).

---

## 🔹 Descrição das versões

### 1. `01-css-global/`
- Usa **um único arquivo CSS global** (`styles.css`).  
- Tokens (cores, espaçamentos, sombras) definidos em variáveis CSS.  
- Ideal para projetos simples ou quando há necessidade de herança global.  

### 2. `02-css-modules/`
- Usa **CSS Modules** (`Componente.module.css`).  
- Estilos são **escopados localmente** a cada componente.  
- Evita conflitos de classe em projetos maiores.  

### 3. `03-tailwind/`
- Usa **Tailwind CSS** (utility-first).  
- Estilização feita diretamente nos atributos `className`.  
- Facilita prototipagem rápida e mantém consistência de design.  

### 4. `04-styled-components/`
- Usa **Styled-components** (CSS-in-JS).  
- Estilos definidos dentro dos próprios componentes.  
- Suporte a **props** e **ThemeProvider** para dark/light mode.  
- Boa escolha para aplicações modernas e componentizadas.  

---

## 🚀 Como rodar cada versão individualmente

Cada versão é independente. Para rodar:

```bash
# Exemplo para CSS Global
cd 01-css-global
npm install
npm run dev

Acesse no navegador: http://localhost:5173

Repita os mesmos passos para 02-css-modules/, 03-tailwind/ e 04-styled-components/.
🧩 Como rodar todas as versões de uma vez (monorepo)

Você pode usar npm workspaces ou concurrently para rodar tudo junto.
Opção 1 – Workspaces

Na raiz do projeto (package.json):

{
  "private": true,
  "workspaces": [
    "01-css-global",
    "02-css-modules",
    "03-tailwind",
    "04-styled-components"
  ]
}

Rodando:

npm install
npm run dev -w 01-css-global
npm run dev -w 02-css-modules
...

Opção 2 – Rodar em paralelo (mais simples)

Instale globalmente:

npm install -g concurrently

Crie um package.json na raiz com:

{
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix 01-css-global\" \"npm run dev --prefix 02-css-modules\" \"npm run dev --prefix 03-tailwind\" \"npm run dev --prefix 04-styled-components\""
  }
}

Agora basta rodar:

npm run dev