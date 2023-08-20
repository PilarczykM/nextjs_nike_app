"use client";

import Image, { StaticImageData } from "next/image";

type ShoeType = {
  thumbnail: any;
  bigShoe: StaticImageData;
};

type PropTypes = {
  shoe: ShoeType;
  changeBigShoeImage: (shue: ShoeType) => void;
  bigShoeImg: string;
};

const ShoeCard = ({ shoe, changeBigShoeImage, bigShoeImg }: PropTypes) => {
  const handleClick = () => {
    if (bigShoeImg !== shoe.bigShoe.src) {
      changeBigShoeImage(shoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === shoe.bigShoe.src
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
        <Image
          src={shoe.thumbnail}
          width={125}
          height={105}
          alt="shou thumbnail"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
