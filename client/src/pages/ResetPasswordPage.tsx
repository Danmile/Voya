import { useState } from "react";
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
      <div className="flex flex-col items-center justify-center gap-15 z-1 px-6 lg:gap-15 lg:w-1/2 lg:mt-20 bg-white opacity-95 rounded-2xl shadow-2xl py-[8rem]">
        <h1 className="font-bold text-3xl text-center text-gray-700">
          Reset your Password
        </h1>
        <p className="text-center text-xl text-gray-600 -mt-5">
          Please enter your new
        </p>
        <p className="text-center text-xl text-gray-600 -mt-15 lg:-mt-12">
          password
        </p>

        <form
          className="w-full max-w-md"
          onSubmit={(e) => handleChangePassword(e)}
        >
          <div className="flex flex-col gap-10">
            <input
              className="border-1 mt-1 border-gray-300 rounded-xl w-full h-15 focus:border-2 outline-none focus:border-gray-400 text-md font-semibold pl-3"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setPassword({ ...password, password: e.target.value })
              }
            />
            <input
              className="border-1 mt-1 border-gray-300 rounded-xl w-full h-15 focus:border-2 outline-none focus:border-gray-400 text-md font-semibold pl-3"
              type="password"
              placeholder="Confirm password"
              onChange={(e) =>
                setrePassword({ ...password, password: e.target.value })
              }
            />
            <button
              type="submit"
              className="bg-black/90 text-white font-bold rounded-md h-15 hover:bg-black/80 transition shadow-md"
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
