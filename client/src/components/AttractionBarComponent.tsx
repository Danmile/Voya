const AttractionBarComponent = ({ AttrNum }: { AttrNum: number }) => {
  return (
    <div className="fixed bottom-0 bg-gray-200/90 p-5 w-full drop-shadow-2xl">
      <div className="relative flex justify-between items-center">
        <h1 className="flex text-lg md:font-medium">
          {AttrNum} Attractions chosen
        </h1>
        <button className="p-2 bg-white rounded-2xl border-1 border-gray-400 cursor-pointer text-center font-medium md:text-md hover:border-gray-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default AttractionBarComponent;
