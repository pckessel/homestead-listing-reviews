import React from 'react';
import IndividualReview from './IndividualReview.jsx';
import SpecificRatings from './SpecificRatings.jsx';

function ReviewsList (props) {

return (
  <div>
    <div>
      <SpecificRatings reviews={props.reviews}/>
    </div>
    <div>
      <IndividualReview reviews={props.reviews}/>
    </div>
  </div>
  )
}

export default ReviewsList;