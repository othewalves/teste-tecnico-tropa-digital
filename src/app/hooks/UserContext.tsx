'use client'

import { useRouter } from 'next/navigation';
import { createContext, ReactNode, useState } from 'react';
import Cookies from 'js-cookie';

export interface IUser {
    email: string;
    password: string;
};

export interface IUserContext {
    user: IUser;
    login: (user: IUser) => void;
    logout: () => void;
};

const defaultUser: IUser = {
    email: '',
    password: '',
};

export const UserContext = createContext<IUserContext>({
    user: defaultUser,
    login: () => { },
    logout: () => { }
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser>(defaultUser);
    const navigate = useRouter();

    const login = (user: IUser) => {
        setUser(user);
        Cookies.set('tropa-digital-token', JSON.stringify(user))
        navigate.push('/events');
    }

    const logout = () => {
        Cookies.remove('tropa-digital-token');
        navigate.replace('/login');
    }

    return (
        <UserContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
};