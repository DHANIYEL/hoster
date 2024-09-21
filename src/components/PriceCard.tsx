import CustomButton from "./CustomButton";
import Checkmark from "../assets/Checkmark.png";

interface PriceCardProps {
  head: string;
  section: string;
  description: string;
  pricing: string;
  year: string;
  featureList: String[];
}

const PriceCard = ({
  head,
  section,
  description,
  pricing,
  year,
  featureList,
}: PriceCardProps) => {
  // console.log(featureList);

  const handleNavigation = () => {
    window.location.href =
      "https://wa.me/8129730199?text=I'm%20inquiring%20about%20the%20apartment%20listing";
  };
  // Hi there! I'm interested in your Starter WordPress hosting plan. Could you tell me more about what's included and who it's best suited for?
  return (
    <div className="">
      <div className="border-[2px]  rounded-xl shadow-md flex flex-col h-full">
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
          {featureList.map((item) => (
            <div className="flex gap-2 mt-2">
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
