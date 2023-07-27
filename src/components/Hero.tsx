import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} justify-between items-start`}
    >
      <div
        className={`flex flex-1 flex-col ${styles.flexStart} xl:px-0 ss:px-7 px-16`}
      >
        <div
          className="flex flex-row items-center
          py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For
            <span className="text-white"> 1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-poppins font-semibold 
            ss:text-[72px] text-[52px] text-white 
            ss:leading-[100px] leading-[75px]"
          >
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mb-8">
            <GetStarted />
          </div>
        </div>
        <h1
          className="font-poppins font-semibold 
            ss:text-[62px] text-[48px] text-white 
            ss:leading-[100px] leading-[75px] w-full"
        >
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`w-full flex flex-1 ${styles.flexCenter}
          relative my-10`}
      >
        <img
          src={robot}
          alt="robot"
          className="w-full max-w-[650px] min-w-[400px]
          relative z-[5] ml-auto lg:mt-0 mt-10"
        />
        <div
          className="absolute z-0 w-[40%] h-[40%]
          top-0 right-0 pink__gradient"
        />
        <div
          className="absolute z-1 rounded-20 w-[80%] h-[80%]
          bottom-40 right-0 white__gradient"
        />
        <div
          className="absolute z-0 w-[50%] h-[50%]
          right-10 bottom-20 blue__gradient"
        />
      </div>

      <div className={`ss:hidden ${styles.flexCenter} w-full`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
