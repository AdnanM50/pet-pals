"use client"
import { IUser, UserContext } from '@/contexts/user_context';


const UserProvider = ({ children, user }: { children: React.ReactNode, user: IUser }) => {

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;