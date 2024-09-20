import BlogIcon from "../assets/blog-icon.png";
import BlogBox1 from "../assets/blog-box-1.png";
import BlogBox2 from "../assets/blog-box-2.png";
import BlogBox3 from "../assets/blog-box-3.png";

// Assuming blogCard is defined in another file or within the same component

interface BlogCardProps {
  className?: string;
  img: string;
  text: string;
  head: string;
  author: string;
}

const Testimonial = () => {
  const BlogCard = ({ className, img, text, head, author }: BlogCardProps) => {
    return (
      <div className="">
        <div className={` ${className}  padding flex justify-center mx-auto`}>
          <div className="border-[2px] max-md:w-full p-10 lg:w-full rounded-lg shadow-md">
            <div className="w-20 h-20">
              <img src={img} alt="" />
            </div>
            <div className="flex justify-start flex-col gap-3">
              <p className="text-sm">{text}</p>
              <h3 className="text-lg font-semibold">{head}</h3>
              <p className="-mt-3 text-sm text-gray-500">{author}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="padding" id="blog">
        <div className="">
          <div className="relative">
            <img className="opacity-40" src={BlogIcon} alt="blog icon" />
            <div className="top-20 left-24 z-10 absolute ">
              <h1 className="text-4xl font-bold">
                Real Stories from <br /> Real Customers
              </h1>
              <p className="text-sm text-gray-600 my-4">
                Get inspired by these stories.
              </p>
            </div>
            <div className="max-md:mt-28 ">
              <BlogCard
                className="!w-1/2 max-lg:!w-full max-sm:mb-5 -mb-7"
                img={BlogBox1}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem"
                head="Floyd Miles"
                author="Vice President, CLI"
              />
            </div>
            <div className="flex  justify-center">
              <div className="flex -m-12 w-full max-lg:flex-col gap-6">
                {/* Use the BlogCard component here */}
                <BlogCard
                  className="!py-0"
                  img={BlogBox2}
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem"
                  head="Floyd Miles"
                  author="Vice President, CLI"
                />
                <BlogCard
                  className="!py-0"
                  img={BlogBox3}
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem"
                  head="Floyd Miles"
                  author="Vice President, CLI"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
