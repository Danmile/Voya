import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";
import RegisterPage from "./pages/Registerpage";

interface ElementProps {
  children: ReactNode;
}

function App() {
  const { checkAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  const WithNavBar = ({ children }: ElementProps) => (
    <>
      <Navbar />
      <div className="container pt-20">{children}</div>
    </>
  );
  return (
    <>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <WithNavBar>
                <Homepage />
              </WithNavBar>
            }
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!authUser ? <RegisterPage /> : <Navigate to="/" />}
          />
          <Route
            path="/forgot-password"
            element={!authUser ? <ForgotPasswordPage /> : <Navigate to="/" />}
          />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
