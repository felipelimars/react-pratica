import React, { useState } from "react";

const Exer4 = () => {
    
  const [usuarios, setUsuarios] = useState ([
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 17 },
    { nome: "Carol", idade: 32 },
    { nome: "David", idade: 14 },
    { nome: "Eve", idade: 19 },
  ]);

  const personsAge = usuarios.filter((item) => item.idade < 18);

  return (
    <div>
      <hr></hr>
      <h2>Exer 04</h2>
      {personsAge.map((item) => (
        <div key={item.id}>
          <li>{"Nome: " + item.nome + ", idade: " + item.idade}</li>
        </div>
      ))}
    </div>
  );
};

export default Exer4;

