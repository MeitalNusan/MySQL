import React, { createContext, useState } from 'react';

const BuscadorContext = createContext();

export const BuscadorProvider = ({ children }) => {
    const [txtBuscador, setTxtBuscador] = useState('');
    const [buscadorValues, setBuscadorValues] = useState({
        apiUrl: '',
        placeholder: '',
        queryKey: ''
      });

 
  const updateBuscadorValues = (newValues) => {
    setTxtBuscador(newValues);
  };

  return (
    <BuscadorContext.Provider value={{ updateBuscadorValues, updateBuscadorValues }}>
      {children}
    </BuscadorContext.Provider>
  );
};

export default BuscadorContext;
