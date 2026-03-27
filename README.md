# NOWEB — Teste Técnico

Teste Técnico criado pela NoWeb Publicidade, construída com **React**, **TypeScript**, **Tailwind CSS** e **Vite**.

---

## Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [FontAwesome](https://fontawesome.com/) — ícones
- [Lucide React](https://lucide.dev/) — ícones
- [ViaCEP API](https://viacep.com.br/) — busca de endereço por CEP

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) — versão 18 ou superior
- npm ou yarn

---

## Como rodar

**1. Clone o repositório**

```bash
git clone https://github.com/Victor-Estrella/NOWEB.git
cd nowebTeste
```

**2. Instale as dependências**

```bash
npm install
```

**3. Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

---


## Estrutura do projeto

```
src/
├── components/
│   ├── Header/        
│   ├── Hero/           
│   ├── About/          
│   ├── Gallery/       
│   ├── OurMission/     
│   ├── NearYou/        
│   ├── Partners/      
│   ├── View360/       
│   ├── CTA/            
│   └── Footer/         
├── App.tsx
└── main.tsx
```

---

## Funcionalidades

**Busca por CEP**

O ícone de lupa no Header abre uma modal integrada com a API do [ViaCEP](https://viacep.com.br/). Digite qualquer CEP com ou sem traço (ex: `03323000` ou `03323-000`) para consultar automaticamente:

- Logradouro
- Complemento
- Bairro
- UF
- Estado (localidade)

Os campos retornados são somente leitura. É possível realizar múltiplas buscas sem fechar a modal.

---

## Autor
Realizado pelo candidato Victor Henrique Estrella Carracci