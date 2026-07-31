import { createContext, useContext, useState } from "react";

const SpinnerContext = createContext();

export const SpinnerProvider = ({ children }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const show = () => setShowSpinner(true);
  const hide = () => setShowSpinner(false);

  return (
    <SpinnerContext.Provider
      value={{
        showSpinner,
        show,
        hide,
      }}
    >
      {children}
    </SpinnerContext.Provider>
  );
};

export const useSpinner = () => useContext(SpinnerContext);