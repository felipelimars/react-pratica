import React, { useState } from "react";

const Exer6 = () => {

  const [numbers, setNumbers] = useState([2, 4, 6, 8, 10]);

  const numbersVerification = numbers.filter((item) => item % 2 === 0);

  const checkAllNumbersAreEven = () => {
    if (numbersVerification.length === numbers.length) {
      return "Todos os números são pares.";
    }
  };

  return (
    <div>
      <hr />
      <h2>Exer 06</h2>
      <div>
        <p>{checkAllNumbersAreEven()}</p>
          {numbersVerification.map((item) => (
            <li key={item}>{item}</li>
          ))}
      </div>
    </div>
  );
};

export default Exer6;
