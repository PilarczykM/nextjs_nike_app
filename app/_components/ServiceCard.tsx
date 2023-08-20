import Image, { StaticImageData } from "next/image";

type PropType = {
  imgURL: StaticImageData;
  label: string;
  subtext: string;
};

const ServiceCard = ({ imgURL, label, subtext }: PropType) => {
  return (
    <div className="flex-1 px-10 py-16 rounded-[20px] shadow-3xl sm:w-[350px] sm:min-w-[350px] w-full">
      <div className="flex rounded-full w-11 h-11 items-center justify-center bg-coral-red">
        <Image src={imgURL.src} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
