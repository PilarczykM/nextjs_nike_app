import { ReviewCard } from "@/components/index";
import { reviews } from "@/constants/index";

const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h3 className="capitalize font-palanquin text-center text-4xl font-bold">
          What Our<span className="mx-4 text-coral-red">Customers</span>
          Say?
        </h3>
        <p className="info-text text-center mt-4">
          Hear genuine stories from our satisfies customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
