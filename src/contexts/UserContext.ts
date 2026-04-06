import { createContext, type ReactNode } from "react";

interface User {
    id : string;
    fullname : string;
    cpf : string;
    isLogged : boolean;
}

interface UserContextType {
    user : User | null,
    login : (userData : User) => void;
    logout : () => void;
    loading : boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ( { children }: { children : ReactNode }) => {
    // state de user e loading

    // useEffect pra ler ao iniciar (setar usuario)

    // login function

    // logout function
}