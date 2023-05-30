import React from 'react';

const Exercicio6 = () => {

  const cores = ['vermelho', 'azul', 'amarelo', 'verde', 'roxo'];
  
  const primaryColors = cores.filter((item) => ['vermelho', 'azul', 'amarelo'].includes(item));

  return (
        <div>
          <hr></hr>
          <h2>Exercicio 06</h2>
            {primaryColors.map((item, index) => (
              <div key={index}>
                <li>
                  {item}
                </li>
              </div>
            ))}
        </div>
      );
    };    

export default Exercicio6;
