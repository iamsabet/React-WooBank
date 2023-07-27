const NavLinks = ({ mobile, navLinks }: NavLinksPropsType) => {
  return (
    <ul
      className={`list-none 
      ${mobile ? "sm:flex hidden" : "flex flex-col"}
      justify-end items-center flex-1`}
    >
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`font-poppins font-formal 
            cursor-pointer text-[16px] text-white
            ${mobile ? "mr-10 last:mr-0" : "mb-4"}`}
        >
          <a href={`#${nav.id}`} className="w-full h-full hover:text-dimWhite">
            {nav.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
