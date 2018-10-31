import React from 'react';

function SpecificRatings (props) {

    function getAverageRating (ratingName) {
      return Number.parseFloat(props.reviews.reduce( (averageReview, review) => {
        return averageReview += review[ratingName];
      },0)/props.reviews.length).toFixed(1);
    }

  if (props.reviews) {
    return (
      <div>
        <div>
          Accuracy: {getAverageRating('accuracyRating')}
        </div>
        <div>
          Check in: {getAverageRating('check_In_Rating')}
        </div>
        <div>
          Cleanliness: {getAverageRating('cleanlinessRating')}
        </div>
        <div>
          Communication: {getAverageRating('communicationRating')}
        </div>
        <div>
          Location: {getAverageRating('locationRating')}
        </div>
        <div>
          Value: {getAverageRating('valueRating')}
        </div>
      </div>
    )
  } else {
    return(
      <div>NOTHING TO SHOW HERE!</div>
    )
  }
}

export default SpecificRatings;


