import { useOutlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        // TODO: Make navigation UI here?
        {outlet}
    )
};

export default ProtectedLayout;