import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";

interface ElementProps {
  children: ReactNode;
}

function App() {
  const { checkAuth, authUser, isCheckingAuth } = useAuthStore();

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
            element={
              authUser ? (
                <WithNavBar>
                  <Homepage />
                </WithNavBar>
              ) : (
                <LoginPage />
              )
            }
          />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
