import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
   const [contador, setContador] = useState(0);

   return (
      <div className="counter">
         <h1>Contador {contador}</h1>
         <div>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            <button onClick={() => setContador(contador - 1)}>Disminuir</button>
         </div>
         {contador > 18 ? <h1>Eres todo un crack</h1> : <h4>tas Chiquito</h4>}
      </div>
   )
}

export default Counter;