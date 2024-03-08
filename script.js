//alert("Bem-vindo(a) Jogador(a)! Qual o seu nome?");
const perguntas = [
    {
        pergunta: "Quais são os princípios da segurança da informação?", 
        respostas:[
            {texto: "Confidencialidade, segurança e disponibilidade.", correção: false},
            {texto: "Confiabilidade, integridade e disponibilidade.", correção: false},
            {texto: "Confidencialidade, integridade e disponibilidade.", correção: true},
            {texto: "confiabilidade, disponibilidade e autenticidade.", correção: false},
            {texto: "Confidencialidade, continuidade e autenticidade.", correção: false},
        ]
    },
    {
        pergunta: "Um bit, possui quantos valores?", 
        respostas:[
            {texto: "01", correção: false},
            {texto: "02", correção: true},
            {texto: "03", correção: false},
            {texto: "04", correção: false},
            {texto: "05", correção: false},
        ]
    },
    {
        pergunta: "Quais são os dispositivos de entradas?", 
        respostas:[
            {texto: "Teclado, monitor, webcam e impressora", correção: false},
            {texto: "mouse, autofalante, microfone e monitor.", correção: false},
            {texto: "monitor, teclado, mouse e impressora.", correção: false},
            {texto: "webcam, monitor, autofalante, impressora.", correção: false},
            {texto: "Teclado, mouse, webcam e microfone.", correção: true},
        ]
    },
    {
        pergunta: "Qual a camada 5 do modelo OSI?", 
        respostas:[
            {texto: "Aplicação.", correção: false},
            {texto: "Apresentação.", correção: false},
            {texto: "Sessão", correção: true},
            {texto: "Transporte", correção: false},
            {texto: "Rede", correção: false},
        ]
    },
    {
        pergunta: "O que é uma ameaça?", 
        respostas:[
            {texto: "É a probabilidade de um agente ameaçador tirar vantagem de uma vulnerabilidade.", correção: false},
            {texto: "É uma fraqueza de um ativo ou grupo de ativos que pode ser explorada.", correção: false},
            {texto: "É um processo de planejar, organizar, conduzir e controlar as atividades de uma organização.", correção: false},
            {texto: "É uma potencial causa de incidente não desejado, o que pode resultar em prejuízo o sistema ou à organização.", correção: true},
            {texto: "Processo de definir e analisar os perigos pelos quais indivíduos , empresas e agências governamentais passam em decorrência de potenciais eventos adversos naturais ou causados pelo homem.", correção: false},
        ]    
    },
    {
        pergunta: "Quais são os tipos de ameaças?", 
        respostas:[
            {texto: "Ameaças humanas e não humanas.", correção: true},
            {texto: "Ameaças previsíveis e não previsíveis.", correção: false},
            {texto: "Ameaça direta e indireta.", correção: false},
            {texto: "Ameaça tolerável e intolerável.", correção: false},
            {texto: "Ameaças artificiais e não artificiais.", correção: false},
        ]
    },
    {
        pergunta: "Existem três papéis fundamentais que um sistema de informação pode desempenhar em uma empresa ou organização. Quais são?", 
        respostas:[
            {texto: "Apoio ao dono, à concorrência e as operações.", correção: false},
            {texto: "Apoio à estratégia, a tomada de decisão e aos produtos finalizados.", correção: false},
            {texto: "Apoio a livre concorrência, a tomada de decisão e as operações.", correção: false},
            {texto: "Apoio à estratégia, a indecisão e as operações.", correção: false},
            {texto: "Apoio à estratégia, a tomada de decisão e as operações", correção: true},
        ]
    },
    {
        pergunta: "Qual dos seguintes termos se refere a programas, documentos ou mensagens que podem causar prejuízos aos sistemas de computadores??", 
        respostas:[
            {texto: "Malwares", correção: false},
            {texto: "Vírus", correção: false},
            {texto: "Worms", correção: false},
            {texto: "Spyware", correção: false},
            {texto: "Todas as anteriores", correção: true},
        ]
    },
{
        pergunta: "Uma empresa deseja garantir que os dados sejam mantidos em segredo, gerenciando e controlando o acesso às informações, evitando o compartilhamento não autorizado de dados. Qual característica da segurança da informação está sendo enfatizada??", 
        respostas:[
            {texto: "Confidencialidade", correção: true},
            {texto: "Integridade", correção: false},
            {texto: "Disponibilidade", correção: false},
            {texto: "Autenticidade", correção: false},
            {texto: "Veracidade", correção: false},
        ]
},
{
        pergunta: "Para evitar a sabotagem de sistemas de computadores, qual das seguintes abordagens é considerada a mais eficaz para proteger as informações e os recursos??", 
        respostas:[
            {texto: " Utilização de autenticação multifator.", correção: false},
            {texto: "Atualização regular do software e patches de segurança.", correção: false},
            {texto: "Criptografia de dados em repouso e em trânsito.", correção: true },
            {texto: "Implementação de firewalls e sistemas de detecção de intrusão.", correção: false},
            {texto: "Monitoramento contínuo de logs de segurança.", correção: false},
        ]
}
];

const perguntasQuiz = document.getElementById("assunto");
const botãoRespostas = document.getElementById("respostas");
const botãoProximo = document.getElementById("botao-proximo");

let indexPerguntaAtual = 0;
let pontos = 0;

function startQuiz(){
    indexPerguntaAtual = 0;
    pontos = 0;
    botãoProximo.innerHTML = "Próximo";
    mostraPergunta();
}
function mostraPergunta(){
    redefinir();
    //Exibe a pergunta atual
    let perguntaAtual = perguntas[indexPerguntaAtual]; // perguntas = const perguntas, arrays.
    let numeroPergunta = indexPerguntaAtual + 1;
    perguntasQuiz.innerHTML = numeroPergunta + ". " + perguntaAtual.pergunta; 
    //Exibi as opções de respostas
    perguntaAtual.respostas.forEach(resposta => { 
        const botão = document.createElement("button");
        botão.innerHTML = resposta.texto;
        botão.classList.add("botão")
        botãoRespostas.appendChild(botão);
        if(resposta.correção){
            botão.dataset.correção = resposta.correção;
        }
        botão.addEventListener("click", verificaResposta);

    });
}
function redefinir(){
    botãoProximo.style.display = "none";
    while(botãoRespostas.firstChild){
        botãoRespostas.removeChild(botãoRespostas.firstChild);
    }
}
//verifica se a resposta selecionada esta correta e sinaliza com cores o resultado.
function verificaResposta(a){
    const selectBtn = a.target;
    const estaCorreto = selectBtn.dataset.correção === "true"; 
    if(estaCorreto){
        selectBtn.classList.add("correto");
        pontos++;
    }else{
        selectBtn.classList.add("incorreto");
    }
    //Cria uma array, com as opções do Id respostas.
    Array.from(botãoRespostas.children).forEach(botão => {
        if (botão.dataset.correção === "true"){
            botão.classList.add("correto");
        }
        //Disabilita o botão, para que o jogador não possa clicar em outra resposta novamente.
        botão.disabled = true;
    });
    //Exibe o botão próximo, para seguir para a próxima pergunta.
    botãoProximo.style.display = "block";
}
function mostrePontos(){
    redefinir();
    perguntasQuiz.innerHTML = `Você marcou ${pontos} de ${perguntas.length}!`;
    botãoProximo.innerHTML = "Jogar novamente"
    botãoProximo.style.display = "block";

}
function chameProximoBotao(){
    indexPerguntaAtual++;
    if(indexPerguntaAtual < perguntas.length){
        mostraPergunta();
    }else{
        mostrePontos();
    }
}
botãoProximo.addEventListener("click", ()=>{
    if(indexPerguntaAtual < perguntas.length){
        chameProximoBotao();
    }else{
        startQuiz();
    }
});

startQuiz();
