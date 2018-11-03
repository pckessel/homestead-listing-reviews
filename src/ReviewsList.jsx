import React from 'react';
import IndividualReview from './IndividualReview.jsx';

function ReviewsList (props) {

return (
  <div className={"reviewsList"}>
    <div className={"individualReviews"}>
      <IndividualReview reviews={props.reviews}/>
    </div>
  </div>
  )
}

export default ReviewsList;