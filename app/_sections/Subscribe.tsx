import { Button } from "@/components/index";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex max-container max-lg:flex-col gap-10 justify-between items-center"
    >
      <h3 className="text-4xl font-bold leading-[68px] font-palanquin">
        Sign Up for <span className="text-coral-red mx-2">Updates</span> &
        Newsletrer
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" className="input" placeholder="subscribe@nike.com" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWith />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
