import { createContext, useContext } from "react";

export interface IUser {
  username: string,
  email: string,
  _id: string,
  role: string,
  token: string,
  refreshToken: string,
  createdAt: string,
  updatedAt: string,
  isVerified: boolean,
  pets: [
    {
      _id: string,
      name: string,
      gender: string,
      image: string,
    }
  ]
}

interface UserContextProps {
  user: IUser | null
}

export const UserContext = createContext<UserContextProps>({
  user: null,
});

export const useAuth = () => {
  return useContext(UserContext)
}