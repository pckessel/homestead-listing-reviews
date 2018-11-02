import React from 'react';

function SpecificRatings (props) {

    function getAverageRating (ratingName) {
      return Number.parseFloat(props.reviews.reduce( (averageReview, review) => {
        return averageReview += review[ratingName];
      },0)/props.reviews.length).toFixed(1);
    }

  if (props.reviews) {
    return (
      <div className={"specificRatings"}>
        <div className={"rating"}>
          Accuracy {getAverageRating('accuracyRating')}
        </div>
        <div className={"rating"}>
          Check in {getAverageRating('check_In_Rating')}
        </div>
        <div className={"rating"}>
          Cleanliness {getAverageRating('cleanlinessRating')}
        </div>
        <div className={"rating"}>
          Communication {getAverageRating('communicationRating')}
        </div>
        <div className={"rating"}>
          Location {getAverageRating('locationRating')}
        </div>
        <div className={"rating"}>
          Value {getAverageRating('valueRating')}
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


