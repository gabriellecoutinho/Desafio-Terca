import React, { useState } from 'react';
import imgg from "./img/imgg.png"

const App = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className="container">
      <img src={imgg} alt="imgg" title="imagem"/>
      <h1>Email</h1>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h1>Senha</h1>
      <input
        type="password"
        id="senha"
        name="senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button id="enviar" onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};

export default App;