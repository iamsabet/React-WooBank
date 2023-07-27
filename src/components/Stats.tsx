import { stats } from "../constants";

const Stats = () => (
  <div
    className={`flex justify-start items-center flex-row flex-wrap sm:mb-20 mb-6 mx-auto`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex flex-1 sm:justify-start justify-start items-center flex-row
        m-3`}
      >
        <h4
          className="font-poppins font-semibold xs:text-[40px] 
        text-[30px] xs:leading-[53px] leading-[43px] text-white"
        >
          {stat.value}
        </h4>
        <p
          className="font-poppins font-normal xs:text-[21px] 
        text-[16px] xs:leading-[27px] leading-[22px] 
        text-gradient uppercase ml-4 text-center"
        >
          {stat.title}
        </p>
      </div>
    ))}
  </div>
);

export default Stats;
