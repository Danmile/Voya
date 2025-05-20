import { Link, useNavigate } from "react-router-dom";
import bg2 from "../assets/bg2.svg";
import voyaLogo from "../assets/voyaLogo.svg";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";

const LoginPage = () => {
  const { login } = useAuthStore();
  const authUser = useAuthStore((state) => state.authUser);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(formData);
    if (authUser) {
      navigate("/");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row">
      <div className="absolute top-0 h-screen w-screen">
        <img
          className="w-full h-full overflow-hidden object-cover opacity-40 "
          src={bg2}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-40 gap-10 z-1 px-6 lg:gap-15 lg:w-1/2 lg:mt-20">
        <h1 className="font-bold text-4xl text-cyan-600">Login</h1>
        <p className="text-center text-xl text-gray-600 -mt-5">
          Welcome back you've
        </p>
        <p className="text-center text-xl text-gray-600 -mt-12">been missed!</p>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex flex-col gap-8">
            <input
              className="bg-cyan-100/80 rounded-md w-full h-15 focus:border-2 outline-none focus:border-cyan-600 text-md font-semibold pl-3"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              className="bg-cyan-100/80 rounded-md w-full h-15 focus:border-2 outline-none focus:border-cyan-600 text-md font-semibold pl-3"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
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
      <div className="bg-gradient-to-r from-white to-cyan-700 w-1/2">
        <div className="hidden w-full h-full lg:flex flex-col items-center justify-around z-1">
          <div className="text-center overflow-hidden z-1 mx-6">
            <h1 className="text-6xl font-semibold text-black/70">
              Plan your next adventure effortlessly.
            </h1>
            <h1 className="text-3xl font-semibold mt-10 mx-4 text-black/50">
              Let's make your next trip unforgettable.{" "}
            </h1>
          </div>
          <div className="absolute border-0 rounded-2xl mt-40 md:mt-50">
            <img className="w-[40rem]" src={voyaLogo} alt="" />
          </div>
          <h1 className="text-3xl font-medium text-black/80 z-1">
            Where to next..?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
