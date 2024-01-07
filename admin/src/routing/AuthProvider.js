import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const saveLoginState = (data) => {
        setUser(data);
        navigate("/")
    }

    const deleteLoginState = () => {
        setUser(null);
        navigate("/login", { replace: true });
    }

    const value = useMemo(
        () => ({
            saveLoginState,
            deleteLoginState,
            user
        }),
        [user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    useContext(AuthContext);
}

