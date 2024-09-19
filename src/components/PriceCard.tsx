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
  console.log(featureList);
  return (
    <div>
      <div className="border-[2px] ">
        <div className="p-9">
          <h1>{head}</h1>
          <span>{section}</span>
          <p>{description}</p>
          <h1>{pricing}</h1>
          <p>{year}</p>
          <CustomButton children="Choose this Plan" />
          {featureList.map((item) => (
            <div  className="flex">
              <span>
                <img src={Checkmark} alt="" />
              </span>
              <p>{item}</p>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
