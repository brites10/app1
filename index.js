const perguntas = [
    {
        pergunta: "Qual é o nome da protagonista humana na Saga Crepúsculo?",
        respostas: [
            "A) Bella Swan",
            "B) Alice Cullen",
            "C) Rosalie Hale" 
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o vampiro que se apaixona por Bella Swan?",
        respostas: [
            "A) Edward Cullen",
            "B) Jacob Black",
            "C) Emmett Cullen"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do primeiro livro da Saga Crepúsculo?",
        respostas: [
            "A) Eclipse",
            "B) Amanhecer",
            "C) Crepúsculo"
        ],
        correta: 2
    },
    {
        pergunta: "Em que cidade a história de Crepúsculo se passa?",
        respostas: [
            "A) Seattle",
            "B) Phoenix",
            "C) Forks"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do clã de vampiros liderado por Carlisle Cullen?",
        respostas: [
            "A) Clã Volturi",
            "B) Clã Denali",
            "C) Clã Cullen"
        ],
        correta: 2
    },
    {
        pergunta: "Quem é o melhor amigo de Bella Swan que se torna um lobisomem?",
        respostas: [
            "A) Edward Cullen",
            "B) Emmett Cullen",
            "C) Jacob Black"
        ],
        correta: 2
    },
    {
        pergunta: "Quantos livros compõem a Saga Crepúsculo escrita por Stephenie Meyer?",
        respostas: [
            "A) 3",
            "B) 4",
            "C) 5"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do filho de Bella e Edward?",
        respostas: [
            "A) Jacob",
            "B) Renesmee",
            "C) Charlie"
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o líder dos Volturi?",
        respostas: [
            "A) Marcus",
            "B) Caius",
            "C) Aro"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o poder especial de Edward Cullen?",
        respostas: [
            "A) Ler mentes",
            "B) Prever o futuro",
            "C) Criar ilusões"
        ],
        correta: 0
    }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laços de repetição
for(const item of perguntas){ 
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta 
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
  const respostaSelecionada = parseInt(event.target.value)
  const estaCorreta = respostaSelecionada === item.correta
  
  corretas.delete(item)
  if (estaCorreta) {
    corretas.add(item)
  }
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
}


    quizItem.querySelector('dl').appendChild(dt)
  }
   

   
   //remove os clones
   quizItem.querySelector('dl dt').remove()
 
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
  

