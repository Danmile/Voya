import { useState } from "react";
import bg2 from "../assets/bg2.svg";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";
import { useParams } from "react-router-dom";

const ResetPasswordPage = () => {
  const { resetPassword } = useAuthStore();
  const [password, setPassword] = useState({
    password: "",
  });
  const [rePassword, setrePassword] = useState({
    password: "",
  });

  const { resetToken } = useParams();

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password.password.trim()) {
      toast.error("Password is required!");
      return;
    }
    if (password.password.length < 6) {
      toast.error("Password must be at least 6 characters");
    }
    if (password.password !== rePassword.password) {
      toast.error("Passwords doesn't match");
      return;
    }
    resetPassword(password, resetToken);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="absolute top-0 h-screen w-screen bg-gradient-to-r from-white to-cyan-700">
        <img
          className="w-full h-full overflow-hidden object-cover opacity-40 "
          src={bg2}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-40 gap-15 z-1 px-6 lg:gap-15 lg:w-1/2 lg:mt-20 bg-white opacity-95 rounded-2xl shadow-xl py-[8rem]">
        <h1 className="font-bold text-4xl text-center text-cyan-600">
          Reset your Password
        </h1>
        <p className="text-center text-xl text-gray-600 -mt-5">
          Please enter your new
        </p>
        <p className="text-center text-xl text-gray-600 -mt-12">password</p>

        <form
          className="w-full max-w-md"
          onSubmit={(e) => handleChangePassword(e)}
        >
          <div className="flex flex-col gap-10">
            <input
              className="bg-cyan-100/80 rounded-md w-full h-15 focus:border-2 outline-none focus:border-cyan-600 text-md font-semibold pl-3"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setPassword({ ...password, password: e.target.value })
              }
            />
            <input
              className="bg-cyan-100/80 rounded-md w-full h-15 focus:border-2 outline-none focus:border-cyan-600 text-md font-semibold pl-3"
              type="password"
              placeholder="Confirm password"
              onChange={(e) =>
                setrePassword({ ...password, password: e.target.value })
              }
            />
            <button
              type="submit"
              className="bg-cyan-600 text-white font-bold rounded-md h-15 hover:bg-cyan-700 transition shadow-md shadow-cyan-700/50"
            >
              Change password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
