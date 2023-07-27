import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px]
    rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} bg-primary w-full h-full 
        rounded-full flex-col hover:bg-opacity-90 hover:scale-[110%] transition-all duration-200 ease-in-out`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p
            className="font-poppins font-medium text-[20px]
            leading-[20px] text-gradient mr-4"
          >
            <span>Get</span>
          </p>
          <img
            src={arrowUp}
            className="w-[23px] h-[23px] object-contain"
            alt="arrow"
          />
        </div>
        <p
          className="font-poppins font-medium text-[20px]
            leading-[20px] text-gradient"
        >
          <span>Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
