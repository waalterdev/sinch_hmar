import { createContext, useEffect, useState, useContext, type ReactNode } from "react";

export interface User {
    id: string;
    fullname: string;
    cpf: string;
    password: string;
    isLogged: boolean;
}

interface UserContextType {
    user: User | null;
    login: (cpf: string, pass: string) => boolean;
    logout: () => void;
    register: (userData: User) => void;
    loading: boolean;
    hasLoggedUser: () => boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const currentUserKey = 'Session@:User';
    const usersKey = 'SinCH@:Users';

    useEffect(() => {
        const savedCurrentUser = localStorage.getItem(currentUserKey);
        const savedUsers = localStorage.getItem(usersKey);

        if (savedCurrentUser) {
            setCurrentUser(JSON.parse(savedCurrentUser));
        }

        if (savedUsers) {
            setUsers(JSON.parse(savedUsers));
        }

        setIsLoading(false);
    }, []);

    const login = (cpf: string, pass: string): boolean => {
        const foundUser = users.find(u => u.cpf === cpf && u.password === pass);

        if (foundUser) {
            const loggedUser = { ...foundUser, isLogged: true };
            setCurrentUser(loggedUser);
            localStorage.setItem(currentUserKey, JSON.stringify(loggedUser));
            return true;
        }

        return false;
    };

    const register = (userData: User) => {
        const updatedUsers = [...users, { ...userData, isLogged: false }];
        setUsers(updatedUsers);

        localStorage.setItem(usersKey, JSON.stringify(updatedUsers));
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem(currentUserKey);
    };

    const hasLoggedUser = () => !!currentUser;

    return (
        <UserContext.Provider value={{
            user: currentUser,
            login,
            logout,
            register,
            loading: isLoading,
            hasLoggedUser
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser deve ser usado dentro de um UserProvider");
    }
    return context;
};