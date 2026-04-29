import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import ProtectedPage from "./pages/ProtectedPage";

function App() {
  return (
    <Routes>
      <Route 
        path="/login"
        element={<Login />}
      />

      <Route
        path="/cadastro"
        element={<Cadastro />}
      />
      <Route
        path="/"
        element={
          <ProtectedPage>
            <Home />
          </ProtectedPage>
        }
      />
    </Routes>
  )
}

export default App;