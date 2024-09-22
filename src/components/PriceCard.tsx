import CustomButton from "./CustomButton";
import Checkmark from "../assets/Checkmark.png";

interface PriceCardProps {
  head: string;
  section: string;
  description: string;
  pricing: string;
  year: string;
  featureList: String[];
  wpName: string;
  className?: string;
}

const PriceCard = ({
  head,
  section,
  description,
  pricing,
  year,
  featureList,
  wpName,
  className,
}: PriceCardProps) => {
  // console.log(featureList);

  const handleNavigation = () => {
    window.location.href = `${wpName}`;
  };
  return (
    <div className="">
      <div
        className={`border-[2px]  rounded-xl shadow-md flex flex-col h-full ${className}`}
      >
        <div className="p-6 flex flex-col  gap-4 ">
          <h1 className="text-2xl font-bold ">{head}</h1>
          <span className="bg-yellow-300 px-2 py-0.5 font-semibold w-fit text-[12px] rounded-full">
            {section}
          </span>
          <p className="text-sm font-medium">{description}</p>
          <h1 className="text-4xl font-bold">{pricing}</h1>
          <p className="-mt-3">{year}</p>
          <CustomButton
            children="Choose this Plan"
            handleClick={handleNavigation}
          />
          {featureList.map((item, index) => (
            <div className="flex gap-2 mt-2" key={index}>
              <span>
                <img src={Checkmark} alt="" />
              </span>
              <p key={Math.random().toString()}>{item}</p>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
