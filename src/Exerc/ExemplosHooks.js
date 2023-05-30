import React, { useState } from "react";

// HOOKS
// HOF HIGH ORDER FUNCTIONS

// USE STATE
// MANIPULAÇÃO DE INPUTS, VAI GUARDAR DADOS, MANIPULAR DADOS.
// EXERCIO AO CLICAR NO BOTÃO DE REMOVER ! VOCÊ DEVE SER CAPAZ DE REMOVER A TAREFA QUE
// VOCÊ ESTA CRIANDO
// OBS: A TAREFA ESPEFICICA NÃO A LISTA NÃO UM ITEM ALETORIO MAIS SO QUE VC QUER EXCLUIR


const ExemplosHooks = () => {
  const [numero, setNumero] = useState(0);
  const [inputNome, setInputNome] = useState("Bola");
  const [tarefa, setTarefa] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const newTarefaHandle = () => {
    setTarefa([...tarefa, novaTarefa]);
    setNovaTarefa("");
  };

  const removeButton = (i) => {
    const removedTasks = [...tarefa];
    removedTasks.splice(i, 1);
    setTarefa(removedTasks);
  };

  const capturaEventoAcontecendo = (evento) => {
    setNovaTarefa(evento.target.value);
  };

  const numeromaismais = () => {
    setNumero(numero + 1);
  };

  const numeromenos = () => {
    setNumero(numero - 1);
  };

  const capturarOqueUsuarioDigita = (evento) => {
    setInputNome(evento.target.value);
  };

  return (
    <div>
      <hr></hr>
      <h1>Exemplo 1 - HOOKS</h1>
      <h3>{numero}</h3>
      <button onClick={numeromaismais}>+</button>
      <button onClick={numeromenos}>-</button>

      <hr />
      <h1>Exemplo 2 - HOOKS</h1>
      <input
        type="text"
        value={inputNome}
        onChange={capturarOqueUsuarioDigita}
      />
      <p>{inputNome}</p>

      <hr />
      <h1>Exemplo 3 - HOOKS</h1>
      <input
        type="text"
        value={novaTarefa}
        onChange={capturaEventoAcontecendo}
      />
      <button onClick={newTarefaHandle}>CRIAR</button>

      <ul>
        {tarefa.map((tarefa, index) => (
          <div key={index}>
            <li>{tarefa}</li>
            <button onClick={() => removeButton(index)}>remover</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ExemplosHooks;
