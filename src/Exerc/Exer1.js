import React, { useState } from "react";

const Exer1 = () => {
  const [users, setUsers] = useState(["Alice", "Bob", "Carol", "David", "Eve"]);

  const usersA = users.filter((item) => item.toLowerCase().includes("a"));

  return (
    <div>
      <hr></hr>
      <h2>Exer 01</h2>
      {usersA.map((item, index) => (
        <div key={index}>
          <li>Nomes: {item}</li>
        </div>
      ))}
    </div>
  );
};

export default Exer1;
