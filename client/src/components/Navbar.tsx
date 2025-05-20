import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import voyalogo from "../assets/voyaLogo.svg";
import Button from "./Button";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const authUser = useAuthStore((state) => state.authUser);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="fixed top-0 left-0 z-50 bg-white w-full border-b border-neutral-400/10 shadow-md">
      <div className="flex justify-between items-center px-5 h-16">
        <Link to="/" className="">
          <img src={voyalogo} alt="" width={40} height={50} />
        </Link>
        <div className="flex justify-center gap-5">
          <Link to="/" className="block text-xl">
            <h1 className="">Explore</h1>
          </Link>

          <Link to="/" className="block text-xl">
            <h1>Contact</h1>
          </Link>
        </div>
        {!authUser ? (
          <Link to="/login" className="block">
            <span className="hidden sm:inline">
              <Button>Sign in</Button>
            </span>
            <span className="inline sm:hidden">
              <LogIn className="text-cyan-500/50 transition-colors hover:text-cyan-500" />
            </span>
          </Link>
        ) : (
          <div className="block">
            {" "}
            <span className="hidden sm:inline">
              <Button onClick={() => logout()}>Sign out</Button>
            </span>
            <span className="inline sm:hidden">
              <LogIn className="text-cyan-500/50 transition-colors hover:text-cyan-500" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
