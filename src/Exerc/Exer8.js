import { useState } from "react";

const Exer8 = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const inputPeso = (evento) => {
    setPeso(evento.target.value);
  };

  const inputAltura = (evento) => {
    setAltura(evento.target.value);
  };

  const calculatorImc = () => {
    const imc = peso / (altura * altura);
    return imc;
  };

  const submitButton = () => {
    if (peso === "" || altura === "") {
      alert("Preencha os dois campos antes de enviar!");
    } else {
      setAltura("");
      setPeso("");
      const imc = calculatorImc();
      alert(`Seu IMC é: ${imc.toFixed(2)} !`);
    }
  };

  return (
    <div>
      <hr></hr>

      <h2>Exer 08</h2>
      <label>
        Altura:
        <input value={altura} onChange={inputAltura} placeholder={" 0.00"}/>
      </label>
      <p>{altura}</p>

      <br />
      <label>
        Peso:
        <input value={peso} onChange={inputPeso} placeholder={" 00"}/>
      </label>
      <p>{peso}</p>

      <br />
      <button onClick={submitButton}>Enviar</button>
    </div>
  );
};

export default Exer8;
