import React from "react";
import RoutesApp from "./routes/routes";
import AuthProvider from "./contexts/authDetails"
import { BrowserRouter } from "react-router-dom";
import { PermissaoUsuarioProvedor } from '../src/contexts/PermissaoUsuarioContext';
function App() {
  return (
    <BrowserRouter>    
      <AuthProvider>
        <PermissaoUsuarioProvedor>
          <RoutesApp />
        </PermissaoUsuarioProvedor>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
