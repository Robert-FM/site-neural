# 🌐 Neural Learn

Site institucional estático da Neural Learn, uma iniciativa educacional que integra neurociência, evidências científicas, tecnologia educacional e prática pedagógica para apoiar professores, escolas e redes de ensino.

## 🎯 Objetivo

Apresentar a atuação da Neural Learn, suas soluções educacionais, produtos digitais, equipe e canais de contato em uma página responsiva e acessível.

## ✨ Funcionalidades

- Navegação por âncoras entre as seções da página.
- Menu responsivo para dispositivos móveis.
- Cabeçalho que muda de estado durante a rolagem.
- Animações de revelação conforme os elementos entram na área visível.
- Carrossel horizontal para os produtos digitais.
- Integração com o widget de acessibilidade VLibras.
- Links para WhatsApp, e-mail, LinkedIn e YouTube.
- Layout responsivo com imagens institucionais e de produtos.

## 🛠️ Tecnologias utilizadas

- HTML5 semântico.
- CSS3, organizado em módulos e importado por `css/main.css`.
- JavaScript puro (ECMAScript), sem frameworks ou bibliotecas locais.
- Google Fonts, com a família tipográfica Inter.
- VLibras, carregado externamente para suporte à acessibilidade em Libras.

## 🏗️ Organização do projeto

O projeto é uma aplicação web estática. O arquivo `index.html` concentra a estrutura e o conteúdo da página; `css/main.css` importa os módulos de estilo; e `js/main.js` inicializa os comportamentos interativos quando o documento é carregado.

## 📁 Estrutura do projeto

```text
neural-learning/
├── index.html
├── css/
│   ├── base.css
│   ├── components.css
│   ├── footer.css
│   ├── header.css
│   ├── layout.css
│   ├── main.css
│   ├── products.css
│   └── sections.css
├── images/
│   ├── contact-group.jpg
│   ├── ebook-produto.jpeg
│   ├── ebook-produto2.jpeg
│   ├── ebook-produto3.jpeg
│   ├── ebook-produto4.jpeg
│   ├── focus-bg.jpeg
│   ├── focus-bg.jpg
│   ├── gmail.png
│   ├── hero-learning.jpeg
│   ├── instagram.png
│   ├── linkedin.png
│   ├── mission-brain.jpeg
│   ├── mission-collab.jpeg
│   ├── mission-data.jpeg
│   ├── services-classroom.jpeg
│   ├── team-andrea.jpeg
│   ├── team-robert.jpg
│   ├── team-yago.jpeg
│   └── youtube.png
└── js/
    └── main.js
```

- `index.html`: página institucional, seções de apresentação, soluções, missão, produtos, equipe e contato.
- `css/`: estilos-base, layout, componentes, cabeçalho, seções, produtos e rodapé.
- `images/`: fotografias, imagens ilustrativas, capas de e-books e ícones de redes sociais.
- `js/main.js`: menu mobile, estado do cabeçalho, animações de entrada, rolagem suave e carrossel.

## 📋 Pré-requisitos

É necessário apenas um navegador moderno com suporte a HTML5, CSS3 e JavaScript. Não há runtime, gerenciador de pacotes ou serviço local obrigatório declarado pelo projeto.

## ▶️ Como executar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em um navegador.

Como alternativa, publique a pasta em qualquer servidor de arquivos estáticos. O projeto não possui etapa de compilação, instalação de dependências ou comando de build configurado.

## 💻 Como utilizar

A página pode ser percorrida pelo menu principal ou pelas chamadas para ação. A seção de produtos direciona para os sites externos dos e-books, enquanto o botão de contato abre uma conversa no WhatsApp. Os comportamentos de menu, rolagem, animação e carrossel são ativados automaticamente pelo `js/main.js`.

## 🔗 Produtos e integrações externas

Os produtos apresentados apontam para os seguintes endereços:

- [Ferramentas Digitais para Educadores](https://ferramentasdigitais.neurallearn.com.br/)
- [Ferramentas de Conteúdo Visual Digitais](https://conteudosdigitais.neurallearn.com.br/)
- [Guia de Prompt para Educadores](https://promptseducacionais.neurallearn.com.br/)
- [Atividades Pedagógicas](https://atividadespedagogicas.neurallearn.com.br/)

O site também utiliza Google Fonts e o serviço VLibras, portanto esses recursos dependem de conexão externa quando a página é carregada.

## ✅ Testes

Não foram encontrados testes automatizados ou uma configuração de ferramenta de testes no repositório.

## 🚀 Possíveis melhorias

- Adicionar validação automatizada do HTML, CSS e acessibilidade.
- Criar testes para os comportamentos interativos do JavaScript.
- Adicionar uma etapa de hospedagem ou publicação contínua, caso o projeto passe a utilizar CI/CD.

## 👨‍💻 Autor

**Robert Melo**

🔗 LinkedIn: [linkedin.com/in/robertdemelo](https://www.linkedin.com/in/robertdemelo/)

🌐 HTML | CSS | JavaScript | Desenvolvimento Web | Acessibilidade

## 📄 Direitos autorais

© 2026 Robert Melo / Neural Learn. Todos os direitos reservados.

Este repositório contém o código-fonte do site institucional da Neural Learn.
O código, a identidade visual, os textos, imagens e demais conteúdos deste
projeto não são disponibilizados sob uma licença de código aberto.

Não é permitida a reprodução, distribuição, modificação ou utilização
comercial deste projeto, no todo ou em parte, sem autorização prévia
do autor.

As marcas, logotipos, imagens e conteúdos de terceiros eventualmente
utilizados permanecem sujeitos aos direitos de seus respectivos titulares.
