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
          Accuracy {props.createStars(getAverageRating('accuracyRating'))}
        </div>
        <div className={"rating"}>
          Check in {props.createStars(getAverageRating('check_In_Rating'))}
        </div>
        <div className={"rating"}>
          Cleanliness {props.createStars(getAverageRating('cleanlinessRating'))}
        </div>
        <div className={"rating"}>
          Communication {props.createStars(getAverageRating('communicationRating'))}
        </div>
        <div className={"rating"}>
          Location {props.createStars(getAverageRating('locationRating'))}
        </div>
        <div className={"rating"}>
          Value {props.createStars(getAverageRating('valueRating'))}
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


