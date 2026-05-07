import { Navigate } from "react-router";
import { useUser } from "../contexts/UserContext"

interface Props {
    children: React.ReactElement
}

function ProtectedPage({ children }: Props) {
    const { user, loading } = useUser();

    if (loading) {
        return <h1>Carregando...</h1>; 
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedPage