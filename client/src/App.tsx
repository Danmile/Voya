import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";
import RegisterPage from "./pages/Registerpage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AttractionsPage from "./pages/AttractionsPage";
import TripPage from "./pages/TripPage";

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
      <>{children}</>
    </>
  );
  return (
    <>
      <>
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
          <Route
            path="/reset-password/:resetToken"
            element={!authUser ? <ResetPasswordPage /> : <Navigate to="/" />}
          />
          <Route
            path="/attractions/:cityName"
            element={
              <WithNavBar>
                <AttractionsPage />
              </WithNavBar>
            }
          />
          <Route
            path="/trip/:cityName"
            element={
              <WithNavBar>
                <TripPage />
              </WithNavBar>
            }
          />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </>
    </>
  );
}

export default App;
