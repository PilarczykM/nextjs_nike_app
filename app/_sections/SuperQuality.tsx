import { Button } from "@/components/index";
import Image from "next/image";
import { shoe8 } from "@/assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red ml-4">Super</span>
          <br />
          <span className="text-coral-red mr-4">Quality</span>
          Shoes
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
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <Image
          className="object-contain"
          src={shoe8}
          alt="Premium Shoe"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
