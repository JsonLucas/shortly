import { createContext, ReactNode, useContext, useState } from "react";

interface IAuthContext {
    isAuthenticated: boolean,
    setIsAuthenticated: (param: boolean) => void
}

interface PageProps {
    children: ReactNode
}

const AuthContext = createContext({ } as IAuthContext);

export function AuthContextComponent({ children }: PageProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);