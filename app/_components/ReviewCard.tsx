import Image, { StaticImageData } from "next/image";
import { star } from "@/assets/icons";

type PropTypes = {
  imgURL: StaticImageData;
  customerName: string;
  rating: number;
  feedback: string;
};

const ReviewCard = ({ customerName, feedback, imgURL, rating }: PropTypes) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        width={120}
        height={120}
        src={imgURL.src}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
      <div className="flex gap-2 mt-2 justify-center items-center">
        <Image
          src={star}
          width={24}
          height={24}
          alt="star"
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
