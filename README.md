# PsiGabrielle

Este é um site profissional para a psicóloga Gabrielle, desenvolvido em React com TypeScript e Tailwind CSS.

## Funcionalidades
- Página inicial com informações sobre serviços de psicologia
- Seções: Sobre, Serviços, Contato
- Botão flutuante para contato via WhatsApp
- Layout responsivo e moderno

## Tecnologias Utilizadas
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Estrutura do Projeto
```
psigabrielle/
├── public/
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── WhatsAppButton.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
3. Acesse `http://localhost:3000` no navegador.

## Scripts Disponíveis
- `npm start`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a versão de produção
- `npm test`: Executa os testes
