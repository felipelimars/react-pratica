import React from 'react'

const Exercicio3 = () => {

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const numbersfiltered = numeros.filter((i) => i % 2 === 0);

  console.log(numbersfiltered)


  return (
    <div>
        <hr></hr>
        <h2>Exercicio 03</h2>
        <li>{'Os números pares encontrados foram: ' + numbersfiltered}</li>
    </div>
  )
}

export default Exercicio3
