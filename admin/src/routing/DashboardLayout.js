import { useOutlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const DashboardLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if (user) {
        return <Navigate to="/dashboard" />
    }

    return (
        // TODO: Make navigation UI here?
        {outlet}
    )
};

export default DashboardLayout;