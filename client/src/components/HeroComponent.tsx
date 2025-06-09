import Button from "./Button";

const HeroComponent = () => {
  return (
    <div className="relative w-full h-full py-16">
      {/* background img */}
      <div className="absolute top-0 right-0 w-full h-full bg-black/70 z-0">
        <img
          src="/src/assets/heroCover.jpg"
          className="w-full h-full object-cover opacity-50"
          alt="HeroImage"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center h-full justify-between mt-20 gap-20 mx-10 md:items-start md:mx-20 md:my-30">
        <h1 className="bg-white/70 rounded-3xl p-3 text-sm md:text-lg">
          The world is wide. Go see it.
        </h1>
        <div className="text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-br from-white to-white bg-clip-text text-transparent text-center drop-shadow-2xl md:text-7xl md:text-start py-1">
            Plan your next journey with ease..
          </h1>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent text-center mt-10 drop-shadow-2xl md:text-start md:text-6xl">
            inspiration,
          </h1>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white/60 to-white/70 bg-clip-text text-transparent text-center mt-2 drop-shadow-2xl shadow-black md:text-start md:text-5xl">
            and zero stress.
          </h1>
        </div>
        <Button className="bg-white rounded-3xl p-4 font-semibold cursor-pointer hover:bg-white/90">
          Explore now
        </Button>
      </div>
    </div>
  );
};

export default HeroComponent;
