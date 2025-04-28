import React, { useState } from "react";
import { LoadingContext } from "./FirebaseAuthContext";

const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const loadingInfo = {
    loading,
    setLoading,
  };
  return (
    <LoadingContext.Provider value={loadingInfo}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoaderProvider;
