import bg2 from "../assets/bg2.svg";

const ForgotPasswordPage = () => {
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
          Please enter your email
        </p>
        <p className="text-center text-xl text-gray-600 -mt-12">
          address below.
        </p>

        <form className="w-full max-w-md">
          <div className="flex flex-col gap-10">
            <input
              className="bg-cyan-100/80 rounded-md w-full h-15 focus:border-2 outline-none focus:border-cyan-600 text-md font-semibold pl-3"
              type="email"
              placeholder="Email"
            />
            <button
              type="submit"
              className="bg-cyan-600 text-white font-bold rounded-md h-15 hover:bg-cyan-700 transition shadow-md shadow-cyan-700/50"
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
