import Client1 from "../assets/client-1.png";
import Client2 from "../assets/client-2.png";
import Client3 from "../assets/client-3.png";
import Client4 from "../assets/client-4.png";
import Client5 from "../assets/client-5.png";
import Client6 from "../assets/client-6.png";
import Client7 from "../assets/client-7.png";
import Client8 from "../assets/client-8.png";

const Clients = () => {
  return (
    <div className="padding" id="clients">
      <div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <h3 className="text-2xl font-bold">Our Major Clients</h3>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-medium">Major brands who trust us</h2>
            <div className="h-[3px] m-4 bg-black  w-1/2"></div>
          </div>
          <p className="p-4">
            Our very own clients rely on us for their hosting needs & we are
            committed to giving the best of our services
          </p>
        </div>
        <div className="padding-y grid grid-cols-4 justify-center items-center max-md:grid-cols-2">
          <img src={Client1} alt="Client1" />
          <img src={Client2} alt="Client2" />
          <img src={Client3} alt="Client3" />
          <img src={Client4} alt="Client4" />
          <img src={Client5} alt="Client5" />
          <img src={Client6} alt="Client6" />
          <img src={Client7} alt="Client7" />
          <img src={Client8} alt="Client8" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
