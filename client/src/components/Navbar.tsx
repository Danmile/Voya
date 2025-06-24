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
          <Link to="/explore" className="block text-md md:text-lg lg:text-xl">
            <h1 className="">Explore</h1>
          </Link>
          <Link to="/myTrips" className="block text-md md:text-lg lg:text-xl">
            <h1 className="">My Trips</h1>
          </Link>

          <Link to="/contact" className="block text-md md:text-lg lg:text-xl">
            <h1>Contact</h1>
          </Link>
        </div>
        {!authUser ? (
          <Link to="/login" className="block">
            <span className="hidden sm:inline">
              <button className="text-black text-xs rounded-xl p-3 border-gray-400 border cursor-pointer text-center font-medium md:text-sm hover:border-gray-700">
                Sign in
              </button>
            </span>
            <span className="inline sm:hidden">
              <LogIn className="text-gray-700/50 transition-colors hover:text-gray-500" />
            </span>
          </Link>
        ) : (
          <div className="block">
            {" "}
            <span className="hidden sm:inline">
              <button
                className="text-black text-xs rounded-xl p-3 border-gray-400 border cursor-pointer text-center font-medium md:text-sm hover:border-gray-700"
                onClick={() => logout()}
              >
                Sign out
              </button>
            </span>
            <span className="inline sm:hidden">
              <LogIn className="text-gray-700/50 transition-colors hover:text-gray-500" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
