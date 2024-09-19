import { useState } from 'react';

const Pricing = () => {
  const [activePlan, setActivePlan] = useState<string>('basic');

  const handlePlanClick = (plan: string) => {
    setActivePlan(plan);
  };

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
        <div className="padding-y flex padding-x flex-col">
          <div className="flex justify-around items-center text-xl font-semibold">
            <div className="w-1/2 flex flex-col items-center cursor-pointer" onClick={() => handlePlanClick('basic')}>
              <h5 className=''>Basic</h5>
              <div className={`h-1 w-full ${activePlan === 'basic' ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
            </div>
            <div className="w-1/2 flex flex-col items-center cursor-pointer" onClick={() => handlePlanClick('premium')}>
              <h5>Premium</h5>
              <div className={`h-1 w-full ${activePlan === 'premium' ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;