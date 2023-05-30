import React, { useState } from "react";

const Exer2 = () => {

  const [numbers, SetNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const highNumbers = numbers.filter((item) => item > 5 );

  return (
    <div>
      <hr></hr>
      <h2>Exer 02</h2>
      {highNumbers.map((item, index) => (
        <div key={index}>
          <li>Números maiores que 5: {item}</li>
        </div>
      ))}
    </div>
  );
};

export default Exer2;