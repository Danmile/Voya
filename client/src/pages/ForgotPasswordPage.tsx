import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const ForgotPasswordPage = () => {
  const { forgotPassword } = useAuthStore();
  const [email, setEmail] = useState({ email: "" });

  const handleEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await forgotPassword(email);
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-15 z-1 px-6 lg:gap-15 lg:w-1/2 lg:mt-20 bg-white opacity-95 rounded-2xl shadow-2xl border border-gray-100 py-[8rem]">
        <h1 className="font-bold text-3xl text-center text-gray-700">
          Forgot your Password?
        </h1>
        <p className="text-center text-xl text-gray-600 -mt-5">
          Please enter your email
        </p>
        <p className="text-center text-xl text-gray-600 -mt-12">
          address below.
        </p>

        <form className="w-full max-w-md" onSubmit={(e) => handleEmail(e)}>
          <div className="flex flex-col gap-10">
            <input
              className="border-1 mt-1 border-gray-300 rounded-xl w-full h-15 focus:border-2 outline-none focus:border-gray-400 text-md font-semibold pl-3"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail({ email: e.target.value })}
              required
            />
            <button
              type="submit"
              className="bg-black/90 text-white font-bold rounded-md h-15 hover:bg-black/80 transition shadow-md"
            >
              Send reset email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
