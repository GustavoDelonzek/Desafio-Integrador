import React from "react";
import RoutesApp from "./routes/routes";
import AuthProvider from "./contexts/authDetails"
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>    
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
