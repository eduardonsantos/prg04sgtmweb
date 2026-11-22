# Sistema de Gerenciamento de Tributos — Web

Interface web de um sistema para administração, consulta e emissão de tributos municipais, com foco no **Imposto Predial e Territorial Urbano (IPTU)**. O sistema permite controlar contribuintes, gerenciar imóveis e gerar guias de pagamento de forma digital.

Este repositório é exclusivamente o **Frontend** (camada de apresentação), construído com **React**. Toda a lógica de negócio e o banco de dados ficam em uma API Backend independente, consumida via requisições RESTful.

## Funcionalidades

- Portal inicial com informações do projeto e avisos do sistema
- Tela de login e área administrativa
- Gestão de contribuintes e imóveis
- Geração de guias de pagamento do IPTU
- Navegação entre páginas sem recarregar o navegador (React Router)
- Páginas de apoio ao desenvolvimento: paleta de cores e campo de testes

> Algumas funcionalidades dependem da integração com o Backend e podem estar em desenvolvimento.

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Frontend (este repositório) | React 19.3, Vite, React Router DOM 6, Bootstrap 5.3, CSS3 (global e CSS Modules) e JavaScript |
| Backend (repositório externo) | API RESTful em Java (Spring Boot) com PostgreSQL |

## Arquitetura

Sistema distribuído em duas partes que se comunicam por HTTP/JSON:

```
[ Navegador ]  →  Frontend (React + Vite)  →  API REST (Spring Boot)  →  PostgreSQL
```

## Estrutura do Projeto

```
prg04atividadeswebparte2/
├── public/
│   └── assets/
│       ├── audio/                # background-music.mp3
│       ├── favicon/              # Ícones do site
│       └── images/               # Imagens responsivas (400, 700 e 1000 px)
├── src/
│   ├── components/               # Componentes reutilizáveis
│   │   ├── AmostraCor.jsx
│   │   ├── AmostraCor.module.css
│   │   ├── Avisos.jsx
│   │   ├── Destaque.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LoginForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── SobreProjeto.jsx
│   │   ├── UserRow.jsx
│   │   └── UserTable.jsx
│   ├── pages/                    # Uma página para cada rota
│   │   ├── Admin.jsx
│   │   ├── Atividade3.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Paleta.jsx
│   │   └── Sandbox.jsx
│   ├── App.jsx                   # Navbar, rotas e Footer
│   ├── index.css                 # Estilos globais
│   └── main.jsx                  # Ponto de entrada (Bootstrap e Router)
├── index.html                    # Documento base da aplicação
├── package.json
├── vite.config.js
├── vercel.json                   # Redirecionamento das rotas na hospedagem
└── README.md
```

| Pasta / Arquivo | Descrição |
| --- | --- |
| `public/assets/` | Recursos estáticos: áudio, favicons e imagens (acessados por `/assets/...`) |
| `src/components/` | Blocos visuais reutilizáveis: navegação, rodapé, cards, formulário de login e tabela de usuários |
| `src/pages/` | Telas do sistema, uma para cada rota |
| `src/App.jsx` | Define a Navbar, o Footer e as rotas da aplicação |
| `src/index.css` | Estilos globais (fonte, cores do projeto e ajustes sobre o Bootstrap) |

### Rotas

| Caminho | Página |
| --- | --- |
| `/` | Início |
| `/atividade-3` | Atividade 3 |
| `/sandbox` | Campo de Testes |
| `/paleta` | Paleta de Cores |
| `/login` | Login |
| `/admin` | Painel Administrativo |

## Como Executar

Pré-requisito: [Node.js](https://nodejs.org) em uma versão recente (LTS).

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd prg04atividadeswebparte2
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra no navegador o endereço exibido no terminal (normalmente `http://localhost:5173`).

> Não abra o `index.html` com o Live Server: o React precisa ser compilado pelo servidor do Vite.

Para as funcionalidades que dependem de dados, mantenha o Backend em execução. A integração com a API será configurada no código do Frontend, conforme o desenvolvimento avançar.

### Outros comandos

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Abre uma prévia local da versão de produção |

## Publicação

Aplicação publicada na Vercel: _(adicionar aqui o link público depois do deploy)_

## Autor

Desenvolvido por **Eduardo Nascimento Santos**.
