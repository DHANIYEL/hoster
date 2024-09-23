import { useState } from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  const [activePlan, setActivePlan] = useState<string>("basic");

  const handlePlanClick = (plan: string) => {
    setActivePlan(plan);
  };

  const BasicFeature = [
    "1GB Disk",
    "2 MySQL® Databases",
    "∞ Bandwidth",
    "1 Addon Domains",
    "1 Subdomains",
    "2 Email Accounts",
    "1 FTP Accounts",
  ];

  const MidlleFeature = [
    "10GB Disk",
    "∞ MySQL® Databases",
    "∞ Bandwidth",
    "9 Addon Domains",
    "∞ Subdomains",
    "∞ Email Accounts",
    "∞ FTP Accounts",
  ];

  const AdvanceFeature = [
    "25GB Disk",
    "∞ MySQL® Databases",
    "∞ Bandwidth",
    "∞ Addon Domains",
    "∞ Subdomains",
    "∞ Email Accounts",
    "∞ FTP Accounts",
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8" id="pricing">
      <div className="flex flex-col text-center">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-semibold">
          Affordable WordPress Hosting Plans
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

      <div className="grid gap-6 mt-24 sm:grid-cols-1 lg:grid-cols-3">
        <PriceCard
          head="Shared"
          section=" Shared Server"
          description="With all your customers via all conversation channels."
          pricing="₹125"
          year="Per month"
          featureList={BasicFeature}
          wpName="https://wa.me/9656210077?text=Hi%inquiring%20about%20the%20Starter%20WordPress%20hosting%plan.%20Could%20you%tell%me%20more%20about%20what's%20included%20and%20who%20it's%20best%20suited%20for%20?"
          className="w-auto max-w-sm mx-auto" // Added class for width & centering
        />
        <PriceCard
          head="Cloud"
          section="Cloud Server"
          description="With all your customers via all conversation channels."
          pricing="₹625"
          year="Per month"
          featureList={MidlleFeature}
          wpName="https://wa.me/9656210077?text=Hi%inquiring%20about%20the%20Standard%20WordPress%20hosting%plan.%20What%are%20the%20key%differences%20compared%20to%20the%20Starter%20plan,%20and%20what%20additional%features%20or%benefits%20does%20it%20offer?"
          className="w-auto max-w-sm mx-auto" // Added class for width & centering
        />
        <PriceCard
          head="Suprem"
          section="WordPress Dedicated"
          description="With all your customers via all conversation channels."
          pricing="₹1875"
          year="Per month"
          featureList={AdvanceFeature}
          wpName="https://wa.me/9656210077?text=Hi%inquiring%20about%20the%20Supreme%20hosting%plan.%20Can%20you%tell%20me%20more%20about%20your%2 Supreme%20hosting%20plan,%20and%20how%20it%20compares%20to%20your%20other%20options?"
          className="w-auto max-w-sm mx-auto" // Added class for width & centering
        />
      </div>
    </div>
  );
};

export default Pricing;
