import React from 'react'
import ExemplosHooks from './ExemplosHooks'
/* import ExemploFilter from './ExemploFilter'
import ExemploMap from './ExemploMap' */
import Exercicio1 from './Exercicio1'
import Exercicio2 from './Exercicio2'
import Exercicio3 from './Exercicio3'
import Exercicio4 from './Exercicio4'
import Exercicio5 from './Exercicio5'
import Exercicio6 from './Exercicio6'
import HookExerc from './HookExerc'
import Exer1 from './Exer1'
import Exer2 from './Exer2'
import Exer3 from './Exer3'
import Exer4 from './Exer4'
import Exer5 from './Exer5'
import Exer6 from './Exer6'
import Exer7 from './Exer7'
import Exer8 from './Exer8'

const HomeExercicios = () => {

  const posts = [
    { id: 1, title: 'Post 1', content: 'Conteúdo do post 1' },
    { id: 2, title: 'Post 2', content: 'Conteúdo do post 2' },
    { id: 3, title: 'Post 3', content: 'Conteúdo do post 3' },
    ];

  return (
    <div>
{/*       <ExemploFilter />
      <hr />
      <ExemploMap /> */}
      <Exercicio1 />
      <Exercicio2 posts={posts} />
      <Exercicio3 />
      <Exercicio4 />
      <Exercicio5 />
      <Exercicio6 />
      <HookExerc />      
      <ExemplosHooks />
      <Exer1 />
      <Exer2 />
      <Exer3 />
      <Exer4/>
      <Exer5/>
      <Exer6/>
      <Exer7/>    
      <Exer8/>
  </div>
  );
};

export default HomeExercicios



