import Image from "next/image";
import { offer } from "@/assets/images";
import { Button } from "@/components/index";
import { arrowRight } from "../_assets/icons";

const SpecialOffer = () => {
  return <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
    <div className="flex-1">
      <Image src={offer} width={773} height={687} className="object-contain w-full" alt="big image" />
    </div>
    <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red mr-4">Special</span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Nike Premium shoes epitomize the pinnacle of athletic footwear
          innovation and style. Meticulously crafted using the finest materials
          and cutting-edge manufacturing techniques, these shoes offer athletes
          and fashion enthusiasts alike a blend of exceptional performance and
          striking aesthetics.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          From sleek minimalist designs to bold and vibrant colorways, Nike
          Premium shoes cater to a diverse range of tastes while maintaining the
          brand&apos;s renowned commitment to quality.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
  </section>;
};

export default SpecialOffer;
