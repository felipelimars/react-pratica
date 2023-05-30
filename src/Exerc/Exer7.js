import { useState } from "react"

const Exer7 = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("")


  const inputName = (evento) => {
    setNome(evento.target.value);
  }

  const inputEmail = (evento) => {
    setEmail(evento.target.value);
  }

  const submitButton = () => {
    if (email === "" || nome === "") {
      alert("Preencha os dois campos antes de enviar!");
    } else {
      setEmail("");
      setNome("");
      alert("Login realizado com sucesso!");
    }
  };

  return (
    <div>
      <hr></hr>

      <h2>Exer 07</h2>
      <label>Nome:
        <input type="text"
          value={nome}
          onChange={inputName} />
      </label>
      <p>{nome}</p>

      <br />
      <label>Email:
        <input type="text"
          value={email}
          onChange={inputEmail} />
      </label>
      <p>{email} </p>

      <br />
      <button onClick={submitButton}>Enviar</button>
    </div>
  )
}

export default Exer7
