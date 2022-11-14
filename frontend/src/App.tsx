import React, { useEffect, useState } from "react";
import {
  toCreate as toCreateService,
  tolist as toListService,
} from "./services";

interface response {
  texto: string;
}

function App() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState({} as response);

  const GetText = async () => {
    try {
      const data = await toListService();
      setResponse(data);
    } catch (erro) {
      alert(erro);
    }
  };

  const CreateText = (event: React.FormEvent) => {
    event.preventDefault();
    const Data = {
      texto: text,
    };
    try {
      toCreateService(Data);
    } catch (erro) {
      alert(erro);
    }
    GetText();
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          CreateText(e);
        }}
      >
        <fieldset>
          <legend>
            <h2>React</h2>
          </legend>
          <label>Texto:</label>
          <input onChange={(e) => setText(e.target.value)} />
          <button type="submit">Enviar</button>
        </fieldset>
      </form>
      <div className="">
        <fieldset>
          <legend>
            <h2>Retorno Flask</h2>
          </legend>
          <h2 className="response">{response.texto}</h2>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
