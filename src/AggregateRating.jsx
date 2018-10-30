import React from 'react';

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
    <div>
      <span><h2>{numberOfReviews} Reviews</h2></span>
      <div><span>{aggregateStars} Average Stars</span></div>
    </div>
  </div>
  )
}

export default AggregateRating;