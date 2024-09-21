import CustomButton from "./CustomButton";
import whatsapp from "../assets/Vector.svg";
const Contact = () => {
  const handleNavigation = () => {
    window.location.href = "https://wa.me/9656210077";
  };

  return (
    <div className="padding-x" id="contact">
      <div className="bg-[#F7FAFE] w-full p-20 rounded-lg shadow-sm">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-4xl max-md:text-2xl font-bold text-center">
            We're here to make your <br /> website awesome.
          </h1>
          <CustomButton
            img={whatsapp}
            children="Get  in touch with us"
            className="flex flex-row gap-2 justify-center items-center"
            handleClick={handleNavigation}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
