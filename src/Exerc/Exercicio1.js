import React from 'react'

const Exercicio1 = () => {

const nomes = ['Alice', 'Bob', 'Carol', 'David'];

return (
    <div>
      <h2>Exercicio 01</h2>
      {nomes.map((item, index) => (
        <div key={index}>
          <li>{item}</li>
        </div>
      ))}
      <hr/>
    </div>
  );
};

export default Exercicio1
