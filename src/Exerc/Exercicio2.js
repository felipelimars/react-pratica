import React from 'react';

const Exercicio2 = ({ posts }) => {
  
  return (
    <div>
      <h2>Exercicio 02</h2>
      {posts.map((item) => (
        <div key={item.id}>
          <li>{item.title}</li>
          <li>{item.content}</li>
        </div>
      ))}
    </div>
  );
};  
export default Exercicio2;

