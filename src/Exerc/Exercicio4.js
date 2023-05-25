import React from "react";

const Exercicio4 = () => {
    
  const usuarios = [
    { id: 1, nome: "Alice", idade: 25 },
    { id: 2, nome: "Bob", idade: 17 },
    { id: 3, nome: "Carol", idade: 20 },
    { id: 4, nome: "David", idade: 16 },
  ];

  const personsAge = usuarios.filter((item) => item.idade >= 20);

  return (
    <div>
      <hr></hr>
      <h2>Exercicio 04</h2>
      {personsAge.map((item) => (
        <div key={item.id}>
          <li>{"Nome: " + item.nome + ", idade: " + item.idade}</li>
        </div>
      ))}
    </div>
  );
};

export default Exercicio4;
