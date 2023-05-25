import React, { useState } from "react";

const HookExerc = () => {
    
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 20 },
    { id: 4, name: "David", age: 35 },
  ]);

  const ageUsers = users.filter((item) => item.age > 25);

  return (
    <div>
      <hr></hr>
      <h2>Exercicio 07</h2>
      {ageUsers.map((item) => (
        <div key={item.id}>
          <li>
            Nome: {item.name}, idade: {item.age}
          </li>
        </div>
      ))}
    </div>
  );
};

export default HookExerc;
