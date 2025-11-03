# 🎲 Jogo de Adivinhação de Números

Um jogo simples e interativo desenvolvido como parte dos meus estudos em JavaScript, onde o usuário precisa adivinhar um número secreto entre 1 e 100.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido para praticar conceitos fundamentais de JavaScript, incluindo:

- Manipulação do DOM
- Eventos e funções
- Estruturas condicionais (if/else)
- Validação de entrada de dados
- Geração de números aleatórios com `Math.random()`
- Conversão de tipos de dados com `parseInt()`

## 🎮 Como Jogar

1. Abra o arquivo `index.html` no seu navegador
2. Digite um número entre 1 e 100 no campo de entrada
3. Clique no botão "Adivinhar"
4. O jogo informará se você deve tentar um número maior ou menor
5. Continue tentando até acertar o número secreto!

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e layout responsivo
- **JavaScript** - Lógica do jogo e interatividade

## 📂 Estrutura do Projeto

```
adivinheNumero/
│
├── index.html      # Estrutura HTML do jogo
├── style.css       # Estilos e layout
├── script.js       # Lógica do jogo em JavaScript
└── README.md       # Documentação do projeto
```

## 💡 Conceitos de JavaScript Aprendidos

### 1. Geração de Números Aleatórios
```javascript
Math.floor(Math.random() * 100) + 1
```
- `Math.random()` gera um número decimal entre 0 e 1
- Multiplicado por 100 e somado 1 para obter números de 1 a 100
- `Math.floor()` arredonda para baixo

### 2. Manipulação do DOM
```javascript
document.getElementById()
```
Acessa elementos HTML pelo ID para ler valores e exibir resultados

### 3. Validação de Dados
```javascript
isNaN() // Verifica se o valor não é um número
```
Garante que apenas números válidos sejam processados

### 4. Estruturas Condicionais
Uso de `if/else` para comparar o palpite com o número secreto e fornecer feedback ao usuário

## 🎯 Funcionalidades

- ✅ Geração aleatória de número secreto a cada reload da página
- ✅ Validação de entrada (apenas números entre 1 e 100)
- ✅ Feedback instantâneo para o usuário
- ✅ Interface limpa e intuitiva
- ✅ Design responsivo com box-shadow e border-radius

## 🔧 Como Executar

1. Clone este repositório ou baixe os arquivos
2. Abra o arquivo `index.html` diretamente no navegador
3. Não é necessário nenhum servidor ou instalação adicional

## 📚 Aprendizados

Este projeto me ajudou a entender melhor:
- Como JavaScript interage com HTML e CSS
- A importância da validação de dados do usuário
- Trabalhar com eventos de clique em botões
- Manipular e atualizar conteúdo da página dinamicamente
- Usar o objeto Math para operações matemáticas

## 👨‍💻 Autor

Desenvolvido por **João Francisco**, estudante de engenharia de software.

---

💻 Projeto desenvolvido como parte dos estudos em JavaScript
