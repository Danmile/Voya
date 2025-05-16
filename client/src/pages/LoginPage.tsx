import { Link } from "react-router-dom";
import bg2 from "../assets/bg2.svg";
import travelIcon from "../assets/travelIcon.svg";
import voyaLogo from "../assets/voyaLogo.svg";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row">
      <div className="absolute top-0 h-screen w-screen">
        <img
          className="w-full h-full overflow-hidden object-cover opacity-40 "
          src={bg2}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-40 gap-10 z-1 px-6 lg:gap-15 lg:w-1/2">
        <h1 className="font-bold text-4xl text-cyan-600">Login</h1>
        <p className="text-center text-xl text-gray-600 -mt-5">
          Welcome back you've
        </p>
        <p className="text-center text-xl text-gray-600 -mt-12">been missed!</p>

        <form className="w-full max-w-md">
          <div className="flex flex-col gap-8">
            <input
              className="bg-cyan-100/80 rounded-md w-full h-15 focus:border-2 outline-none focus:border-cyan-600 text-md font-semibold pl-3"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-cyan-100/80 rounded-md w-full h-15 focus:border-2 outline-none focus:border-cyan-600 text-md font-semibold pl-3"
              type="password"
              placeholder="Password"
            />
            <Link className="text-xs text-cyan-600 font-bold flex justify-end md:text-lg">
              Forgot your password?
            </Link>
            <button
              type="submit"
              className="bg-cyan-600 text-white font-bold rounded-md h-15 hover:bg-cyan-700 transition shadow-md shadow-cyan-700/50"
            >
              Sign In
            </button>
            <Link className="text-sm text-gray-700 font-bold flex justify-center md:text-lg">
              Create a new account
            </Link>
          </div>
        </form>
      </div>
      <div className="bg-gradient-to-r from-white to-cyan-500 w-1/2">
        <div className="hidden w-full h-full lg:flex flex-col items-center justify-around z-1">
          <div className="text-center overflow-hidden z-1 mx-5">
            <h1 className="text-6xl font-semibold">
              Plan your next adventure effortlessly.
            </h1>
            <h1 className="text-4xl font-semibold mt-10 mx-4">
              Let's make your next trip unforgettable.{" "}
            </h1>
          </div>
          <div className="absolute border-0 rounded-2xl mt-40 md:mt-50">
            <img className="w-[40rem]" src={voyaLogo} alt="" />
          </div>
          <h1 className="text-4xl font-medium">Where to next..?</h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
