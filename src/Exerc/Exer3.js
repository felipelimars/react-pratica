import React, { useState } from "react";

const Exer3 = () => {

  const [words, SetWords] = useState( ["Dragão", "Cachorro", "Fada", "Panda"]
  );

  const selectedWords = words.filter((item) => item.includes("Panda"));

  return (
    <div>
      <hr></hr>
      <h2>Exer 03</h2>
      {selectedWords.map((item, index) => (
        <div key={index}>
          <li>{item}</li>
        </div>
      ))}
    </div>
  );
};

export default Exer3;