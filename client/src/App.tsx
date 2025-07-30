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
import FavoriteTrips from "./pages/FavoriteTrips";
import CityPage from "./pages/CityPage";

interface ElementProps {
  children: ReactNode;
}

function App() {
  const { checkAuth, authUser, checkingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  const WithNavBar = ({ children }: ElementProps) => (
    <>
      <Navbar />
      <>{children}</>
    </>
  );

  if (checkingAuth) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

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
            path="/mytrips"
            element={
              !authUser ? (
                <LoginPage />
              ) : (
                <WithNavBar>
                  <FavoriteTrips />
                </WithNavBar>
              )
            }
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
          <Route
            path="/cities/:countryCode"
            element={
              <WithNavBar>
                <CityPage />
              </WithNavBar>
            }
          />
        </Routes>
        <Toaster
          position="top-center"
          containerClassName="mt-20"
          reverseOrder={false}
        />
      </>
    </>
  );
}

export default App;
