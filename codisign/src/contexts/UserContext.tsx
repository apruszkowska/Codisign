import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

type User = {
  login: string;
  password: string;
};

type UserContextProps = {
  users: User[];
  registerUser: (login: string, password: string) => void;
  isLoggedIn: boolean;
  logIn: (login: string, password: string) => void;
  logOut: () => void;
};

const UsersContext = createContext<UserContextProps | undefined>(undefined);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // check if user is logged in after registration
  useEffect(() => {
    console.log(isLoggedIn);
  });
  //

  const registerUser = (login: string, password: string) => {
    Axios.post("http://localhost:5175/register", {
      login: login,
      password: password,
    }).then((response) => {
      console.log(response);
    });
    console.log({ login: login, password: password });
    alert("Thanks for register!");
    navigate("/login");
  };

  const logIn = (login: string, password: string) => {
    Axios.post("http://localhost:5175/login", {
      login: login,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setIsLoggedIn(response.data.message);
        alert("Wrong login or password");
      } else {
        setIsLoggedIn(response.data[0].login);
        alert("You are logged in!");
        navigate("/allCourses");
      }
    });

    return;
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <UsersContext.Provider
      value={{ users, registerUser, isLoggedIn, logIn, logOut }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const ctx = useContext(UsersContext);

  if (!ctx) {
    throw new Error("Missing UsersContext, it's not wrapped in UsersProvider");
  }
  return ctx;
};
