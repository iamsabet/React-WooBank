import React from "react";
type BtnStylesType = {
  styles: string;
  text: string;
};
const Button = ({ styles, text }: BtnStylesType) => (
  <button
    type="button"
    className={`py-4 px-6 
      bg-blue-gradient font-poppins font-medium
      text-[18]px text-primary outline-none ${styles}`}
  >
    {text}
  </button>
);

export default Button;
