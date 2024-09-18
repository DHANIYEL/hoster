const Pricing = () => {
  return (
    <div className="sm:px-16 px-8">
      <div>
        <div className="flex flex-col text-center">
          <h1 className="text-4xl font-semibold">
            Ready to get started with <br />
            Lemon Wares?
          </h1>
          <p className="text-gray-500 mt-5">
            Choose the package that suits you
          </p>
        </div>
        <div className="padding-y flex padding-x flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-24 text-xl font-semibold ">
            <p>Basic</p>
            <p>Premium</p>
          </div>
          <div className="h-1 w-1/2 bg-blue-500 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
