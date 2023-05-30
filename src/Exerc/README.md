Exercício 1:
Crie uma lista de nomes utilizando useState e map. Em seguida, 
filtre os nomes que contêm a letra 'a' utilizando filter e exiba-os.

EXEMPLO: ["Alice", "Bob", "Carol", "David", "Eve"]

Exercício 2:
Crie uma lista de números utilizando useState e map. Em seguida, 
filtre os números maiores que 5 utilizando filter e exiba-os.

EXEMPLO: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Exercício 3:
Crie uma lista de palavras utilizando useState e map. Em seguida,
 verifique se a palavra "Panda" está presente na lista utilizando includes e 
 exiba o resultado.

 ["Dragão", "Cachorro", "Fada", "Panda"]

 Exercício 4:
Crie uma lista de objetos contendo nome e idade utilizando useState e map. Em seguida, 
filtre os objetos cuja idade é menor que 18 utilizando filter e exiba-os.

EXEMPLO:  { nome: "Alice", idade: 25 },
          { nome: "Bob", idade: 17 },
          { nome: "Carol", idade: 32 },
          { nome: "David", idade: 14 },
           { nome: "Eve", idade: 19 },

Exercício 5:
Crie uma lista de objetos contendo nome, idade e cidade utilizando useState e map. 
Em seguida, filtre os objetos cuja idade é maior que 30 e a cidade seja "São Paulo"
 utilizando filter e exiba-os.

 EXEMPLO:     { nome: "Alice", idade: 25, cidade: "São Paulo" },
              { nome: "Bob", idade: 35, cidade: "Rio de Janeiro" },
              { nome: "Carol", idade: 40, cidade: "São Paulo" },
              { nome: "David", idade: 28, cidade: "São Paulo" },
              { nome: "Eve", idade: 32, cidade: "São Paulo" },          


Exercício 6:
Crie uma lista de números utilizando useState e map. Em seguida, 
verifique se todos os números são pares utilizando filter e includes. Exiba o resultado.

 EXEMPLO: [2, 4, 6, 8, 10]

 FAÇA TAMBÉM INFEM TERNÁRIO PARA DIZER ! SE SÃO TODOS PARES OU SE POSSUE IMPAR

 Exercício 7:

 Crie 2 inputs um chamado nome e outro chamado EMAIL ! usando a lógica que 
 você aprendeu de controlar os inputs ! Controle os inputs usando useState.
 Ao termino disso ! Agora crie uma função que checa se os campos foram preenchidos
 ao apertar um botão de enviar, porém caso estejam vazios diga que o campo esta vazio em um alert.
 Caso os campos estejam preenchidos apareça o alerta dizendo que esta correto e com as informações.

 EXEMPLO: const [nome, setNome] = useState("");
          const [email, setEmail] = useState("");

BONUS: AO FINALIZAR ATIVIDADE LEMBRE-SE DE CONCEITOS DE UX OU SEJA SE USUARIO QUISER DIGITAR
OUTRA COISA NESSES INPUTS VAI TER APAGAR OQUE JÁ DIGITOU MANUALMENTE, ENTÃO TODA VEZ QUE VOCÊ ENVIAR
ESSA REQUISIÇÃO, LEMBRE QUE OS CAMPOS DO INPUTS DEVEM SER ZERADOS. PARA USUARIO DIGITAR NOVAMENTE
SEM PRECISAR APAGAR.


Exemplo 8: 
EXERCIO VAI USAR TODA SUA LÓGICA ATÉ AQUI LEMBRE-SE DE NÃO SE SABOTAR CONFIE NO SEU PONTENCIAL E SE DEIXE
LEVAR VOCê CONSEGUE !!!

Calculadora de IMC
Neste exemplo, criaremos uma calculadora de Índice de Massa Corporal (IMC). O usuário informará sua altura e peso nos inputs, e ao submeter o formulário, a função calcularIMC será executada, realizando o cálculo do IMC e exibindo o resultado.

DICA: 
   const [altura, setAltura] = useState("");
   const [peso, setPeso] = useState("");
   const [resultado, setResultado] = useState(null);
   
   CALCULO:
   
   Desevolvido pela Organização Mundial de Saúde (OMS), o cálculo do peso ideal é feito utilizando a fórmula IMC = peso / (altura x altura).


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

<!-- EXERCICIOS REACT JS

1- EXERCICIO CRIE UMA PASTA CHAMADA EXERCICIOS

- COLOQUE 01
- CRIE UM COMPONENTE CHAMADO EXERCICIO 01 COM H1 DE EXERCICIO
- LEMBRE-SE DE CHAMA-LO NO COMPONENTE PAI PARA MOSTRAR
  const nomes = ['Alice', 'Bob', 'Carol', 'David'];
  RENDERIZE O ARRAY DE NOMES EM UM MAP LEMBRE SE DE PASSA A KEY

---

2-CRIE UM COMPONENTE CHAMADO EXERCICIO 02 COM H2 DE EXERCICIO

- EMBAIXO DO COMPONENTE EXERCICIO 01 ESCREVA A TAG <HR> PARA SEPARAR ELES POR UMA LINHA

const posts = [
{ id: 1, title: 'Post 1', content: 'Conteúdo do post 1' },
{ id: 2, title: 'Post 2', content: 'Conteúdo do post 2' },
{ id: 3, title: 'Post 3', content: 'Conteúdo do post 3' }
];

MANDA POR PROPS OU DESTRUTURAÇÃO O ARRAY POST E NO COMPONENTE QUE RECEBER ELE
FAÇA UM MAP MOSTRANDO TODOS OS ITENS .

---

3 - const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

- CRIE UM COMPONENTE CHAMADO EXERCICIO 03 COM H2 DE EXERCICIO
- EMBAIXO DO COMPONENTE EXERCICIO 02 ESCREVA A TAG <HR> PARA SEPARAR ELES POR UMA LINHA

- NO ARRAY NUMEROS FILTRE APENAS OS PARES E ME MOSTRE ISSO EM UM CONSOLE LOG

---

4- const usuarios = [
{ id: 1, nome: 'Alice', idade: 25 },
{ id: 2, nome: 'Bob', idade: 17 },
{ id: 3, nome: 'Carol', idade: 20 },
{ id: 4, nome: 'David', idade: 16 }
];

- CRIE UM COMPONENTE CHAMADO EXERCICIO 04 COM H2 DE EXERCICIO
- EMBAIXO DO COMPONENTE EXERCICIO 03 ESCREVA A TAG <HR> PARA SEPARAR ELES POR UMA LINHA

CONST USUARIO UTILIZE O FILTER PARA FILTRA APENAS AS PESSOAS COM IDADE = OU ACIMA 20
LOGO APOS ISSO RENDERIZE EM UM MAP PARA MIM ESSAS PESSOAS

---

5- const produtos = [
{ id: 1, nome: 'Camiseta', preco: 30 },
{ id: 2, nome: 'Calça', preco: 70 },
{ id: 3, nome: 'Tênis', preco: 100 },
{ id: 4, nome: 'Boné', preco: 20 }
];

- CRIE UM COMPONENTE CHAMADO EXERCICIO 05 COM H2 DE EXERCICIO
- EMBAIXO DO COMPONENTE EXERCICIO 04 ESCREVA A TAG <HR> PARA SEPARAR ELES POR UMA LINHA

CONST PRODUTO UTILIZE O FILTER PARA FILTAR APENAS OS PRODUTOS COM PREÇO ACIMA DE 30 E ME MOSTRE E UM MAP ESSES PRODUTOS.

6- const cores = ['vermelho', 'azul', 'amarelo', 'verde', 'roxo'];

- CRIE UM COMPONENTE CHAMADO EXERCICIO 06 COM H2 DE EXERCICIO
- EMBAIXO DO COMPONENTE EXERCICIO 05 ESCREVA A TAG <HR> PARA SEPARAR ELES POR UMA LINHA

- ESSE AQUI VAI TESTAR SEU NIVEL PESQUISA SIM VOCÊ VAI PESQUISAR E TENTAR ADQUIRIR UMA LOGICA JÁ CONHEÇO O FILTER AGORA VAI PESQUISAR O INCLUDES EXEMPLOS DE COMO FUNCIONA.

USANDO FILTER VOCÊ VAI FILTRAR APENAS AS CORES PRIMARIAS E DEPOIS VAI CHEGAR SE ESSA CORES ESTÃO DENTRO DO PARAMETRO QUE VOCÊ ESTA USANDO COMO BUSCA. USANDO INCLUDES, LOGO
APOS ISSO RENDERIZE PARA MIM ESSA CORES COM UM MAP

7- CRIE UM COMPONENTE CHAMADO HOOK EXERC

const [users, setUsers] = useState([
{ id: 1, name: 'Alice', age: 25 },
{ id: 2, name: 'Bob', age: 30 },
{ id: 3, name: 'Charlie', age: 20 },
{ id: 4, name: 'David', age: 35 },
]);

FILTRE USANDO STATES APENAS PESSOAS QUE TEM IDADDE MAIOR DE 25 E DEPOIS ME MOSTRE E UM
MAP
 -->

