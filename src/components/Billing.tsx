import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";
const Billing = () => (
  <section id="product" className={`${layout.sectionReverse} px-5`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="bill" className="w-full h-full relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[500px]`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="#product">
          <img
            src={apple}
            className="w-[128px] h-[72px] hover:scale-110
            object-contain m-5 cursor-pointer 
            transition-all duration-200 ease-in-out"
            alt="apple_store"
          />
        </a>
        <a href="#product">
          <img
            src={google}
            className="w-[128px] h-[72px] hover:scale-110
            transition-all duration-200 ease-in-out
            object-contain m-5 cursor-pointer"
            alt="google_play"
          />
        </a>
      </div>
    </div>
  </section>
);

export default Billing;
