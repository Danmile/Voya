import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import type { ReactNode } from "react";

interface ElementProps {
  children: ReactNode;
}

function App() {
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
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
