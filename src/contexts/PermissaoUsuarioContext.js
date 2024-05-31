import React, { createContext, useState } from 'react';

export const PermissaoUsuarioContext = createContext();

export const PermissaoUsuarioProvedor = ({ children }) => {
    const [permissaoUsuario, setPermissaoUsuario] = useState('admin');

    return (
        <PermissaoUsuarioContext.Provider value={{ permissaoUsuario, setPermissaoUsuario }}>
            {children}
        </PermissaoUsuarioContext.Provider>
    );
};
