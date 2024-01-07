import { useOutlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthProvider";

const AuthLayout = () => {
    const outlet = useOutlet();

    return (
        // TODO: Make navigation UI here?
        <AuthProvider>
            {outlet}
        </AuthProvider>
    )
};

export default AuthLayout;