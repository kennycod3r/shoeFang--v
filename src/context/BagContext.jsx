import React, { createContext, useContext } from 'react';

const BagContext = createContext();

export const useBagContext = () => useContext(BagContext);

export const BagProvider = ({ children, value }) => {
  return (
    <BagContext.Provider value={value}>
      {children}
    </BagContext.Provider>
  );
};

export default BagContext;
