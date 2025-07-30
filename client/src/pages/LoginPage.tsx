import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";
import landscapeImg from "../assets/landscape.jpg";

const LoginPage = () => {
  const { login } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row">
      <div className="flex flex-col items-center justify-center mt-40 gap-10 z-1 px-6 lg:gap-15 lg:w-1/2 lg:mt-20">
        <h1 className="font-bold text-4xl text-gray-700">Login</h1>
        <p className="text-center text-xl text-gray-600 -mt-5">
          Welcome back you've
        </p>
        <p className="text-center text-xl text-gray-600 -mt-10 lg:-mt-15">
          been missed!
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex flex-col gap-8">
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="border-1 mt-1 border-gray-300 rounded-xl w-full h-15 focus:border-2 outline-none focus:border-gray-400 text-md font-semibold pl-3"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className="border-1 mt-1 border-gray-300 rounded-xl w-full h-15 focus:border-2 outline-none focus:border-gray-400 text-md font-semibold pl-3"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <Link
              to="/forgot-password"
              className="text-xs font-light underline flex justify-end md:text-lg"
            >
              Forgot your password?
            </Link>
            <button
              type="submit"
              className="bg-black/90 text-white font-bold rounded-md h-15 hover:bg-black/80 transition shadow-md"
            >
              Sign In
            </button>
            <Link
              to="/register"
              className="text-sm text-gray-700 font-bold flex justify-center md:text-lg"
            >
              <p className="font-normal mr-1">Don't have an account?</p>
              <p className="font-bold underline">Create one for free</p>
            </Link>
          </div>
        </form>
      </div>
      <div className="relative bg-white w-1/2 overflow-hidden">
        <img
          className="absolute w-full h-full object-cover opacity-70"
          src={landscapeImg}
          alt=""
        />
        <div className="hidden w-full h-full lg:flex flex-col items-center justify-between z-1 mt-50">
          <div className="text-center overflow-hidden z-1 mx-6">
            <h1 className="text-7xl font-semibold text-black/80">
              Plan your next adventure effortlessly..
            </h1>
            <h1 className="text-3xl font-semibold mt-10 mx-4 text-black/50">
              Let's make your next trip unforgettable.{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
