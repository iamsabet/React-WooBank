import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-0`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} justify-center
          sm:min-w-[180px] min-w-[120px] my-2
          cursor-pointer hover:scale-110
          transition-all duration-200 ease-in-out
          `}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px]"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
