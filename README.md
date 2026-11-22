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

O código fica organizado **por funcionalidade**: cada área do sistema tem a sua pasta, com os próprios componentes e páginas. O que é compartilhado por todo o sistema fica em `infrastructure`.

```
prg04sgtmweb/
├── public/
│   └── assets/
│       ├── audio/                # background-music.mp3
│       ├── favicon/              # Ícones do site
│       └── images/               # Imagens responsivas (400, 700 e 1000 px)
├── src/
│   ├── infrastructure/           # Compartilhado por todo o sistema
│   │   ├── components/
│   │   │   ├── AmostraCor.jsx
│   │   │   ├── AmostraCor.module.css
│   │   │   ├── Avisos.jsx
│   │   │   ├── Destaque.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── SobreProjeto.jsx
│   │   └── pages/
│   │       ├── Atividade3.jsx
│   │       ├── Home.jsx
│   │       ├── Paleta.jsx
│   │       └── Sandbox.jsx
│   ├── auth/                     # Autenticação
│   │   ├── components/
│   │   │   └── LoginForm.jsx
│   │   └── pages/
│   │       └── Login.jsx
│   ├── admin/                    # Área administrativa
│   │   ├── components/
│   │   │   ├── UserRow.jsx
│   │   │   └── UserTable.jsx
│   │   └── pages/
│   │       └── Admin.jsx
│   ├── App.jsx                   # Navbar, rotas e Footer
│   ├── index.css                 # Estilos globais
│   └── main.jsx                  # Ponto de entrada (Bootstrap e Router)
├── .oxlintrc.json                # Configuração do linter
├── index.html                    # Documento base da aplicação
├── package.json
├── vite.config.js
├── vercel.json                   # Redirecionamento das rotas na hospedagem
└── README.md
```

| Pasta / Arquivo | Descrição |
| --- | --- |
| `public/assets/` | Recursos estáticos: áudio, favicons e imagens (acessados por `/assets/...`) |
| `src/infrastructure/` | Componentes e páginas compartilhados: navegação, rodapé, cabeçalho, página inicial e páginas de apoio |
| `src/auth/` | Tudo de autenticação: formulário e página de login |
| `src/admin/` | Tudo da área administrativa: tabela de usuários e página do painel |
| `src/App.jsx` | Define a Navbar, o Footer e as rotas da aplicação |
| `src/index.css` | Estilos globais (fonte, cores do projeto e ajustes sobre o Bootstrap) |

### Onde colocar cada arquivo novo

- Se **uma só área** usa o componente, ele fica na pasta dessa área (por exemplo, `LoginForm` em `auth`).
- Se **duas ou mais áreas** usam o componente, ele vai para `infrastructure` (por exemplo, `Header`, usado em Login e Admin).
- Uma área nova do sistema (contribuintes, imóveis, guias de IPTU) ganha uma pasta própria dentro de `src/`, com `components/` e `pages/`.

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
   cd prg04sgtmweb
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

Aplicação publicada na Vercel: https://prg04sgtmweb.vercel.app

## Autor

Desenvolvido por **Eduardo Nascimento Santos**.
