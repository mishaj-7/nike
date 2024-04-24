import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

function CusotomerReviews() {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        what Our 
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our 
        satisfied customers about their
        exceptional expreiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly
      items-center max-lg:flex-col gap-14
      ">
        {reviews.map((review, index) => (
          <ReviewCard key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
      </section>
  )
}

export default CusotomerReviews
