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

  const MidlleFeature = ["20GB Disk", "1 CPU", "2GB RAM", "2TB Traffic"];

  const AdvanceFeature = [
    "Xeon-E 2386G - 6 c / 12 t - 3.5 GHz / 4.7 GHz",
    "From 32 GB to 128 GB DDR4 ECC",
    "SSD NVMe, HDD SATA",
    "bandwidth1 Gbps guaranteed",
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
          description="Collaborate with all your customers seamlessly."
          pricing="₹3500"
          year="Per year"
          featureList={BasicFeature}
          wpName="https://wa.me/9656210077?text=Hi%20inquiring%20about%20the%20Starter%20Shared%20Server%20plan.%20Could%20you%20tell%20me%20more%20about%20what's%20included%20and%20who%20it's%20best%20suited%20for%20?"
          className="w-auto max-w-sm mx-auto  hover:-translate-y-4 duration-[350ms] cursor-pointer" // Added class for width & centering
        />
        <PriceCard
          head="Cloud"
          section="Cloud Server"
          description="Scale effortlessly with our cloud hosting."
          pricing="₹3500"
          year="Per month"
          featureList={MidlleFeature}
          wpName="https://wa.me/9656210077?text=Hi%20inquiring%20about%20the%20Standard%20Cloud%20Server%20plan.%20What%20are%20the%20key%20differences%20compared%20to%20the%20Starter%20plan,%20and%20what%20additional%20features%20or%20benefits%20does%20it%20offer?"
          className="w-auto max-w-sm mx-auto hover:-translate-y-4 duration-[350ms] cursor-pointer " // Added class for width & centering
        />
        <PriceCard
          head="Dedicated"
          section="WordPress Dedicated"
          description="Experience ultimate control with dedicated hosting."
          pricing="₹8500"
          year="Per month"
          featureList={AdvanceFeature}
          wpName="https://wa.me/9656210077?text=Hi%20inquiring%20about%20the%20Dedicated%20hosting%20plan.%20Can%20you%20tell%20me%20more%20about%20your%20 WordPress%20Dedicated%20plan,%20and%20how%20it%20compares%20to%20your%20other%20options?"
          className="w-auto max-w-sm mx-auto hover:-translate-y-4 duration-[350ms] cursor-pointer " // Added class for width & centering
        />
      </div>
    </div>
  );
};

export default Pricing;
