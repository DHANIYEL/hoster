import { useState } from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  const [activePlan, setActivePlan] = useState<string>("basic");

  const handlePlanClick = (plan: string) => {
    setActivePlan(plan);
  };

  const BasicFeature = [
    "10GB Bandwidth",
    "5 Email Accounts",
    "Unlimited Database",
    "1 Parked Domain",
    "1 Websites",
  ];

  const MidlleFeature = [
    "2GB SSD",
    "10GB Bandwidth",
    "15 Email Accounts",
    "Unlimited Database",
    "2 Subdomains",
    "2 Websites",
  ];

  const AdvanceFeature = [
    "2GB SSD",
    "10GB Bandwidth",
    "15 Email Accounts",
    "Unlimited Database",
    "4 Subdomains",
    "1 Parked Domain",
    "2 Websites",
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8" id="pricing">
      <div className="flex flex-col text-center">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-semibold">
          Ready to get started with <br />
          Lemon Wares?
        </h1>
        <p className="text-gray-500 mt-6 text-sm sm:text-base md:text-lg">
          Choose the package that suits you
        </p>
      </div>

      <div className="mt-8">
        <div className="flex justify-around items-center text-xl font-semibold">
          <div
            className="w-1/2 flex flex-col items-center cursor-pointer"
            onClick={() => handlePlanClick("basic")}
          >
            <h5>Basic</h5>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-24">
        <PriceCard
          head="Starter"
          section=" Shared Server"
          description="With all your customers via all conversation channels."
          pricing="₹3500"
          year="Per year"
          featureList={BasicFeature}
          wpName="https://wa.me/9656210077?text=Hi%20inquiring%20about%20the%20Starter%20WordPress%20hosting%20plan.%20Could%20you%20tell%20me%20more%20about%20what's%20included%20and%20who%20it's%20best%20suited%20for%20?"
        />
        <PriceCard
          head="Standard"
          section="Cloud Server"
          description="With all your customers via all conversation channels."
          pricing="₹3500"
          year="Per month"
          featureList={MidlleFeature}
          wpName="https://wa.me/9656210077?text=Hi%20inquiring%20about%20the%20Standard%20WordPress%20hosting%20plan.%20What%20are%20the%20key%20differences%20compared%20to%20the%20Starter%20plan,%20and%20what%20additional%20features%20or%20benefits%20does%20it%20offer?"
        />
        <div className="">
          <PriceCard
            head="Suprem"
            section="WordPress Dedicated"
            description="With all your customers via all conversation channels."
            pricing="₹8500"
            year="Per month"
            featureList={AdvanceFeature}
            wpName="https://wa.me/9656210077?text=Hi%20inquiring%20about%20the%20Supreme%20hosting%20plan.%20Can%20you%20tell%20me%20more%20about%20your%20Supreme%20hosting%20plan,%20and%20how%20it%20compares%20to%20your%20other%20options?"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
