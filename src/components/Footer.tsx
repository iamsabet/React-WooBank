import { footerLinks, socialMedia } from "../constants";
import styles from "../style";
import { logo } from "../assets";

type FooterLinks = {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
};
const Footer = () => (
  <section
    id="footer"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div
        className="flex-[1.5] w-full flex flex-row justify-between flex-wrap
      md:mt-0 mt-10"
      >
        {footerLinks.map((links: FooterLinks) => (
          <div
            key={links.title}
            className="flex flex-col items-center justify-start
            ss:my-0 my-4 min-w-[150px]"
          >
            <h4
              className="text-white font-medium font-poppins text-[18px]
            leading-[27px] w-full"
            >
              {links.title}
            </h4>
            <ul className="list-none mt-4 w-full">
              {links.links.map((link) => (
                <li key={link.name} className="last:mb-0 mb-3">
                  <a
                    href={link.link}
                    className="font-poppins text-dimWhite font-normal 
                text-[16px] leading-[24px] hover:text-secondary cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p
        className="text-dimWhite font-normal font-poppins text-center text-[17px]
            leading-[19px]"
      >
        Copyright 2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social) => (
          <a
            key={social.id}
            href={social.link}
            className="mr-6 
            last:mr-0 hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <img
              src={social.icon}
              alt={social.id}
              className="w-[22px] h-[22px] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
