import { createContext, useEffect, useState, useContext, type ReactNode } from "react";

export interface User {
    id: string;
    fullname: string;
    cpf: string;
    password: string;
    level?: 0 | 1;
    isLogged: boolean;
}

interface UserContextType {
    user: User | null;
    login: (cpf: string, pass: string) => boolean;
    logout: () => void;
    register: (userData: User) => void;
    loading: boolean;
}

const adminDefault: User = {
    id: "265e2beb-254a-4454-80fb-e140ee99147a",
    fullname: "Admin",
    cpf: "111.111.111-11",
    password: "123",
    level: 1,
    isLogged: false
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const usersKey = 'SinCH@:Users';
    const sessionKey = 'Session@:User';

    const [users, setUsers] = useState<User[]>(() => {
        const saved = localStorage.getItem(usersKey);
        
        return saved ? JSON.parse(saved) : [adminDefault];
    });

    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        const saved = localStorage.getItem(sessionKey);
        return saved ? JSON.parse(saved) : null;
    });

    const [isLoading, setIsLoading] = useState(false);

    // 2. Sincronização Automática com LocalStorage
    useEffect(() => {
        localStorage.setItem(usersKey, JSON.stringify(users));
    }, [users]);

    const login = (cpf: string, pass: string): boolean => {
        const foundUser = users.find(u => u.cpf === cpf && u.password === pass);

        if (foundUser) {
            const loggedUser = { ...foundUser, isLogged: true };
            setCurrentUser(loggedUser);
            localStorage.setItem(sessionKey, JSON.stringify(loggedUser));
            return true;
        }
        return false;
    };

    const register = (userData: User) => {
        const newUser = { ...userData, level: userData.level ?? 0, isLogged: false };
        setUsers(prev => [...prev, newUser]);
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem(sessionKey);
    };

    return (
        <UserContext.Provider value={{
            user: currentUser,
            login,
            logout,
            register,
            loading: isLoading,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser deve ser usado dentro de um UserProvider");
    return context;
};