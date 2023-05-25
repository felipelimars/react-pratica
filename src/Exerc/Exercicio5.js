import React from "react";

const Exercicio5 = () => {

  const produtos = [
    { id: 1, nome: "Camiseta", preco: 30 },
    { id: 2, nome: "Calça", preco: 70 },
    { id: 3, nome: "Tênis", preco: 100 },
    { id: 4, nome: "Boné", preco: 20 },
  ];

  const productsPrice = produtos.filter((item) => item.preco > 30);

  return (
    <div>
      <hr></hr>
      <h2>Exercicio 05</h2>
        {productsPrice.map((item) => (
          <div key={item.id}>
            <li>{"Nome: " + item.nome + ", preço: " + item.preco}</li>
          </div>
        ))}
    </div>
  );
};




export default Exercicio5;
