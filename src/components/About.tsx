import companyLocgo from "../assets/cmp-logo.png";
import time from "../assets/time.png";
import cloud from "../assets/cloud.png";
import online from "../assets/online.png";
import support from "../assets/support.png";

const About = () => {
  return (
    <div className="padding  App  " id="about">
      <div className="flex justify-center items-center gap-10 max-md:flex-col">
        <div className="flex gap-10 flex-col flex-1 ">
          <h1 className="text-4xl font-bold">
            Empower Your WordPress Journey with Server Ninja
          </h1>
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
        {/* <div className="grid grid-cols-3 max-md:grid-cols-2  gap-6 flex-1 justify-items-center ">
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
          <img src={companyLocgo} alt="" className="object-cover" />
        </div> */}
      </div>
      {/*  */}
      {/****************** clients ******************/}
      {/*  */}
      <div>
        <div></div>
      </div>
      <div className="padding-y items-start grid grid-cols-4 max-md:grid-cols-2  gap-10  padding-y ">
        <div className="flex flex-col justify-center items-center ">
          <div className="h-[80px] w-[80px] ">
            <img src={time} alt="" className="object-contain" />
          </div>
          <div className="flex flex-col justify-center items-center max-sm:text-center">
            <h1 className="text-md font-semibold p-3 text-center">
              Unmatched Uptime{" "}
            </h1>
            <p className="text-sm text-gray-600">
              Experience the reliability of our 99.99% uptime guarantee,
              ensuring your website is always accessible to your audience.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  max-sm:text-center">
          <div className="h-[80px] w-[80px]">
            <img src={cloud} alt="" className="object-contain" />
          </div>
          <h1 className="text-md font-semibold p-3 text-center">
            Robust Security
          </h1>
          <p className="text-sm text-gray-600">
            Protect your website from threats with our advanced security
            measures, including regular backups, malware scanning, and SSL
            certificates.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  max-sm:text-center">
          <div className="h-[80px] w-[80px]">
            <img src={support} alt="" className="object-contain" />
          </div>
          <h1 className="text-md font-semibold p-3 text-center">
            Expert Support
          </h1>
          <p className="text-sm text-gray-600">
            Benefit from our dedicated support team, available 24/7 to assist
            you with any questions or issues related to your hosting.
          </p>
        </div>
        <div className="flex flex-col justify-center  items-center max-sm:text-center">
          <div className="h-[80px] w-[80px]">
            <img src={online} alt="" className="object-contain" />
          </div>
          <h1 className="text-md font-semibold p-3 text-center">Scalable</h1>
          <p className="text-sm text-gray-600">
            Scalable hosting for your growing website. Our infrastructure adapts
            seamlessly to your needs, ensuring optimal performance and security.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
