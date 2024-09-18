import companyLocgo from "../assets/cmp-logo.png";
import time from "../assets/time.png";

const About = () => {
  return (
    <div className="padding" id="about">
      <div className="flex justify-center items-center gap-10">
        <div className="flex gap-10 flex-col flex-1 ">
          <h1 className="text-4xl font-bold">True Cloud Web Hosting</h1>
          <p>
            True Cloud Web Hosting All of the hosting packages we offer are
            deployed instantly on our SSD powered cloud. We don’t use dedicated
            servers that operate on single pieces of hardware. Our entire
            infrastructure is built to be reliable, secure, and scalable.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 flex-1 justify-items-center ">
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
        </div>
      </div>
      <div className="padding-y grid grid-cols-4  gap-10 text-center">
        <div className="flex flex-col justify-center items-center">
          <div className="h-[80px] w-[80px]">
            <img src={time} alt="" className="object-contain" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-md font-semibold p-3">99.9% Uptime</h1>
            <p className="text-sm text-gray-600">
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[80px] w-[80px]">
            <img src={time} alt="" className="object-contain" />
          </div>
          <h1 className="text-md font-semibold p-3">
            Blazing Fast Web Hosting
          </h1>
          <p className="text-sm text-gray-600">
            We Keep Your Web build Online 24x7x365. Downtime not only costs you
            lost visitors but also damages your reputation and search engine
            rankings.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[80px] w-[80px]">
            <img src={time} alt="" className="object-contain" />
          </div>
          <h1 className="text-md font-semibold p-3">Free SSL Certificates</h1>
          <p className="text-sm text-gray-600">
            We Keep Your Web build Online 24x7x365. Downtime not only costs you
            lost visitors but also damages your reputation and search engine
            rankings.
          </p>
        </div>
        <div className="flex flex-col justify-center  items-center">
          <div className="h-[80px] w-[80px]">
            <img src={time} alt="" className="object-contain" />
          </div>
          <h1 className="text-md font-semibold p-3">24x7 Friendly Support</h1>
          <p className="text-sm text-gray-600">
            We Keep Your Web build Online 24x7x365. Downtime not only costs you
            lost visitors but also damages your reputation and search engine
            rankings.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
