import React from 'react';

function SpecificRatings (props) {

  function getAverageRating (ratingName) {
    return Number.parseFloat(props.reviews.reduce( (averageReview, review) => {
      return averageReview += review[ratingName];
    },0)/props.reviews.length).toFixed(1);
  }

  var ratingNames = [
    {accuracyRating: 'Accuracy'},
    {check_In_Rating: 'Check in'},
    {cleanlinessRating: 'Cleanliness'},
    {communicationRating: 'Communication'},
    {locationRating: 'Location'},
    {valueRating: 'Value'}
  ]

  if (props.reviews) {
    return (
      <div className={"specificRatings"}>
        {ratingNames.map( ratingObj => {
          var ratingName =undefined;
          var ratingHtmlName =undefined;
          for (var key in ratingObj) {
            ratingName = key;
            ratingHtmlName = ratingObj[key];
          }
          return (
            <div>
              <div className={"ratingName"}> {ratingHtmlName} </div>
              <div className={"ratingStars"}> {props.createStars(getAverageRating(ratingName))} </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}

export default SpecificRatings;


