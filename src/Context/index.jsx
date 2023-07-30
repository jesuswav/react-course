import { createContext } from "react";
import { useState } from "react";

// creamos un contexto y posteriormente
// creamod un proveedor que nos va a encapsular
// todos los componentes que tenemos en App
// para poder proveerlos de información
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
