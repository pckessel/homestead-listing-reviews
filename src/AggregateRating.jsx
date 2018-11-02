import React from 'react';
import SpecificRatings from './SpecificRatings.jsx';

function AggregateRating (props) {
  if (props.reviews) {
    var numberOfReviews = props.reviews.length;
    var aggregateStars = Number.parseFloat(props.reviews.map( review => {
      let sum = 0
      sum += review.accuracyRating;
      sum += review.check_In_Rating;
      sum += review.cleanlinessRating;
      sum += review.communicationRating;
      sum += review.locationRating;
      sum += review.valueRating;
      return sum / 6;
    }).reduce( (totalAverage, reviewAverage) => {
      return totalAverage += reviewAverage
    },0)/numberOfReviews).toFixed(1);
  }

return (
  <div>
    <div className={"aggregateReviewsAndStarsContainer"}>
      <div className={"totalReviews"}>{numberOfReviews} Reviews</div>
      <span className={"aggregateStars"}>{aggregateStars} Average Stars</span>
    </div>
     <div>
      <SpecificRatings reviews={props.reviews}/>
    </div>
  </div>
  )
}

export default AggregateRating;