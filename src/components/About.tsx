import companyLocgo from "../assets/cmp-logo.png";
import time from "../assets/time.png";

const About = () => {
  return (
    <div className="padding  App  " id="about">
      <div className="flex justify-center items-center gap-10 max-md:flex-col">
        <div className="flex gap-10 flex-col flex-1 ">
          <h1 className="text-4xl font-bold">True Cloud Web Hosting</h1>
          <p>
            At Server Ninja, we’re dedicated to providing top-tier WordPress
            hosting solutions that empower your online presence. Our optimized
            servers and infrastructure are specifically designed to deliver
            exceptional performance, security, and reliability for your
            WordPress websites. <br />
            <br />
            Enjoy the ease of our one-click WordPress installations, along with
            automatic updates and backups to keep your site running smoothly.
            Our expert support team is always available to assist you with any
            questions or issues, ensuring a hassle-free hosting experience. With
            Server Ninja, you can focus on creating amazing content while we
            handle the technicalities of hosting your WordPress website.
          </p>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2  gap-6 flex-1 justify-items-center ">
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
        </div>
      </div>
      <div className="padding-y grid grid-cols-4 max-md:grid-cols-2  gap-10  padding-y ">
        <div className="flex flex-col justify-center items-center ">
          <div className="h-[80px] w-[80px] ">
            <img src={time} alt="" className="object-contain" />
          </div>
          <div className="flex flex-col justify-center items-center max-sm:text-center">
            <h1 className="text-md font-semibold p-3 text-center">
              99.9% Uptime
            </h1>
            <p className="text-sm text-gray-600">
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  max-sm:text-center">
          <div className="h-[80px] w-[80px]">
            <img src={time} alt="" className="object-contain" />
          </div>
          <h1 className="text-md font-semibold p-3 text-center">
            Blazing Fast Web Hosting
          </h1>
          <p className="text-sm text-gray-600">
            We Keep Your Web build Online 24x7x365. Downtime not only costs you
            lost visitors but also damages your reputation and search engine
            rankings.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  max-sm:text-center">
          <div className="h-[80px] w-[80px]">
            <img src={time} alt="" className="object-contain" />
          </div>
          <h1 className="text-md font-semibold p-3 text-center">
            Free SSL Certificates
          </h1>
          <p className="text-sm text-gray-600">
            We Keep Your Web build Online 24x7x365. Downtime not only costs you
            lost visitors but also damages your reputation and search engine
            rankings.
          </p>
        </div>
        <div className="flex flex-col justify-center  items-center max-sm:text-center">
          <div className="h-[80px] w-[80px]">
            <img src={time} alt="" className="object-contain" />
          </div>
          <h1 className="text-md font-semibold p-3 text-center">
            24x7 Friendly Support
          </h1>
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
