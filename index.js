// Criar uma função que vai imprimir esses valores de 1 até 50
function printOneToFifty() {
    // Criei aqui um for que vai ir de 0 até 50
    for (let i = 0; i <= 50; i++) {
        // Primeira condição vai ser verificar se é divisível por 3 e 5 juntos, se for, o resto será 0 e vai entrar nesse escopo
        if (i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz")
        } 
        // Caso não seja, vai checar agora se é divisível apenas por 3. Se for imprimirá Fizz
        else if (i%3 == 0) {
            console.log("Fizz")
        } 
        // Checará por último se é divisível por 5, sendo, imprimirá Buzz
        else if (i%5 == 0){
            console.log("Buzz")
        }
        // Se não for divisível nem por 3 nem por 5, irá somente mostrar o número normalmente.
        else {
            console.log(i)
        }
    }
}
console.log("Resolução do teste 👌🏽IZI:")
// Chamando a função para teste:
printOneToFifty()

function fibonacciMaker(number) {
    // Criar uma array inicial com os dois primeiros números que iniciam a sequência
    const initialNumbers = [0, 1];

    // Precisamos agora criar um loop que vai passar por todos os números da sequência
    // Aqui já iremos definir o i que normalmente é 0 para 2, porque o 0 e 1 já estão na nossa lista.
    // A condição aqui é que i seja menor que o número que foi passado no argumento.
    // Por último, incrementamos o i normalmente para ir até o número desejado da sequência
    for (let i = 2; i < number; i++) {
        // Criamos aqui uma constante que vai ser o próximo número da sequência, onde segue a seguinte lógica:
        // Vai pegar sempre o último número da array e somar com o penúltimo número da array, por exemplo,
        // no primeiro caso onde i é igual 2 menos 1, nosso index seria 1, que é o último item até então da lista e será somando
        // com o i que é 2, menos 2, que dará 0, ou seja, o index 0 do nosso array inicial que é o penúltimo item.
        // Isso sempre vai se repetir, sempre será uma soma do penúltimo com o último item da array.
        const nextNumber = initialNumbers[i - 1] + initialNumbers[i - 2];
        // Depois que é feito a soma, inserimos esse número criado no último lugar da nossa array e retomamos o loop.
        initialNumbers.push(nextNumber);
    }
    // No final do loop, retornamos todos os valores para nossa array inicial.
    return initialNumbers;
}

// Imprimindo os primeiros 40 números da sequência de Fibonacci
console.log("Resolução do teste 😎 NATTY: ")
console.log(fibonacciMaker(40));

// Resolução do Teste 💣 FAKE NATTY:

// Função para calcular a pontuação de cada piloto em uma corrida de acordo com o sistema de pontuação que for dado no argumento
function calcularPontuacao(resultados, sistemaPontuacao) {
  // Criado uma array com os pontos que serão passados
  const pontos = Array(resultados[0].length).fill(0);

  // Iterar um loop onde vai adicionar os resultados com o sistema de pontuação
  for (let i = 0; i < sistemaPontuacao[0]; i++) {
      pontos[resultados[i] - 1] += sistemaPontuacao[1][i];
  }

  return pontos;
}

// Função para encontrar o Campeão Mundial de Pilotos para um determinado sistema de pontuação
function encontrarCampeao(resultados, sistemasPontuacao) {
  let melhorPontuacao = 0;
  let campeoes = [];

  for (const sistemaPontuacao of sistemasPontuacao) {
      let pontuacoes = Array(resultados[0].length).fill(0);

      // Calcular a pontuação para cada corrida
      for (const corrida of resultados) {
          const pontosCorrida = calcularPontuacao(corrida, sistemaPontuacao);
          pontuacoes = pontuacoes.map((ponto, index) => ponto + pontosCorrida[index]);
      }

      const pontuacaoMaxima = Math.max(...pontuacoes);

      // Atualizar o Campeão Mundial de Pilotos se a pontuação for maior
      if (pontuacaoMaxima > melhorPontuacao) {
          melhorPontuacao = pontuacaoMaxima;
          campeoes = pontuacoes.reduce((acumulador, ponto, index) => {
              if (ponto === pontuacaoMaxima) {
                  acumulador.push(index + 1); // Adicionar piloto ao array de campeões
              }
              return acumulador;
          }, []);
      }
  }

  return campeoes;
}

// Para dar um exemplo dele funcionando precisaria da string para entender melhor como é passado os resultados e se está funcionando
// Como não tinha ela preparada, acabei não testando e ficou um pouco confuso de entender o que era solicitado, tentei fazer
// com as informações que foram passadas no enunciado.