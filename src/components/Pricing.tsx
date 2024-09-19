import { useState } from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  const [activePlan, setActivePlan] = useState<string>("basic");

  const handlePlanClick = (plan: string) => {
    setActivePlan(plan);
  };
    const BasicFeature = ["10GB Bandwidth", "5 Email Accounts", "Unlimited Database","1 Parked Domain","1 Websites"]
    const MidlleFeature = ["2GB SSD", "10GB Bandwidth", "15 Email Accounts","Unlimited Database","2 Subdomains","2 Websites"]
    const AdvanceFeature = ["2GB SSD", "10GB Bandwidth", "15 Email Accounts","Unlimited Database","4 Subdomains","1 Parked Domain","2 Websites"]

  return (
    <div className="sm:px-16  padding" id="pricing">
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
            <div
              className="w-1/2 flex flex-col items-center cursor-pointer"
              onClick={() => handlePlanClick("basic")}
            >
              <h5 className="">Basic</h5>
              <div
                className={`h-1 w-full ${
                  activePlan === "basic" ? "bg-blue-500" : "bg-gray-400"
                }`}
              ></div>
            </div>
            <div
              className="w-1/2 flex flex-col items-center cursor-pointer"
              onClick={() => handlePlanClick("premium")}
            >
              <h5>Premium</h5>
              <div
                className={`h-1 w-full ${
                  activePlan === "premium" ? "bg-blue-500" : "bg-gray-400"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="padding-x grid grid-cols-3 gap-5 max-md:grid-cols-1">
          <div>
            <PriceCard
              head="Starter"
              section=" Shared Server"
              description="with all your customers via all conversation channels."
              pricing="₹3500"
              year="Per year"
              featureList={BasicFeature }
            />
          </div>
          <div>
            <PriceCard head="Starter" section=" Shared Server" description="with all your customers via all conversation channels." pricing="₹3500" year='Per year' featureList={MidlleFeature} />
          </div>
          <div>
            <PriceCard head="Starter" section=" Shared Server" description="with all your customers via all conversation channels." pricing="₹3500" year='Per year' featureList={AdvanceFeature} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
