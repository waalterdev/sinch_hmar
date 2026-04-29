import { Navigate } from "react-router";
import { useUser } from "../contexts/UserContext"

interface Props {
    children: React.ReactElement
}

function ProtectedPage({ children }: Props) {
    const { hasLoggedUser, loading } = useUser();

    const isAllowed = hasLoggedUser();

    if (loading) {
        return <h1>Carregando...</h1>; 
    }

    if (!isAllowed) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedPage