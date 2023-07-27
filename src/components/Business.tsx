import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";

type FeatureType = {
  id: string;
  icon: string;
  title: string;
  content: string;
  index: number;
};

const FeatureCard = ({ icon, title, content }: FeatureType) => (
  <div
    className={`flex flex-row py-5 rounded-[20px] mb-6 feature-card last:mb-0 w-full`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <img alt="title" className="w-1/2 h-1/2 object-contain" src={icon} />
    </div>
    <div className="flex flex-1 flex-col m-3">
      <h4
        className="font-poppins font-semibold text-white 
        text-[18px] leading-[23px] mb-1"
      >
        {title}
      </h4>
      <p
        className="font-poppins font-normal text-dimWhite 
        text-[16px] leading-[24px] mb-1"
      >
        {content}
      </p>
    </div>
  </div>
);
const Business = () => {
  return (
    <section id="features" className={`${layout.section} px-5`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" text="Get Started" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feat, index) => (
          <FeatureCard key={feat.id} {...feat} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
