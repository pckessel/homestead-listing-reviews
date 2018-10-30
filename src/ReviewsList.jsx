import React from 'react';
import IndividualReview from './IndividualReview.jsx';
import SpecificRatings from './SpecificRatings.jsx';

function ReviewsList () {

return (
  <div>
    <div>
      <SpecificRatings/>
    </div>
    <div>
      <IndividualReview/>
    </div>
  </div>
  )
}

export default ReviewsList;