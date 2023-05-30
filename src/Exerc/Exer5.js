import React, { useState } from "react";

const Exer5 = () => {
    
  const [usuarios, setUsuarios] = useState ([
    { nome: "Alice", idade: 25, cidade: "São Paulo" },
    { nome: "Bob", idade: 35, cidade: "Rio de Janeiro"},
    { nome: "Carol", idade: 40, cidade: "São Paulo" },
    { nome: "David", idade: 28, cidade: "São Paulo" },
    { nome: "Eve", idade: 32, cidade: "São Paulo" }, 
  ]);

  const personsAge = usuarios.filter((item) => item.idade > 30 && item.cidade === "São Paulo");

  return (
    <div>
      <hr></hr>
      <h2>Exer 05</h2>
      {personsAge.map((item) => (
        <div key={item.id}>
          <li>{"Nome: " + item.nome + ", idade "+ item.idade + ", cidade: " + item.cidade}</li>
        </div>
      ))}
    </div>
  );
};

export default Exer5;
