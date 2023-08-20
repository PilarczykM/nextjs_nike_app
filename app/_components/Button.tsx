import Image from "next/image";
import React from "react";

type PropTypes = {
  label: string;
  fullWith?: boolean;
  iconURL?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
};

const Button = ({
  iconURL,
  label,
  textColor,
  borderColor,
  backgroundColor,
  fullWith,
}: PropTypes) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 text-white border-coral-red px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
      ${fullWith ? "w-full" : ""} 
      ${backgroundColor ? backgroundColor : "bg-coral-red"}
      ${borderColor ? borderColor : "border-coral-red"}`}
    >
      <p className={`${textColor ? textColor : "text-white"}`}>{label}</p>
      {iconURL && (
        <Image
          className="ml-2 rounded-full"
          src={iconURL}
          width={20}
          height={20}
          alt="button icon"
        />
      )}
    </button>
  );
};

export default Button;
