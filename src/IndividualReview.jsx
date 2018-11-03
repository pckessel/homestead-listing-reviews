import React from 'react';
import Moment from 'react-moment';
import ReviewText from './reviewText.jsx';

function IndividualReview (props) {

    if (props.reviews) {
      return (
        <div>
          {props.reviews.map( review => {
            return (
              <div key={review.reviewId} className={"individualReview"}>
                <div className={"reviewHeader"}>
                  <img src={review.userImage} className={"userImage"}></img>
                  <div className={"nameDate"}>
                    <span className={"userName"}>{review.userName}</span>
                    <div className={"reviewDate"}><Moment format="MMM YYYY">{review.date}</Moment></div>
                  </div>
                </div>
                  <div>
                    <ReviewText reviewText={review.reviewText}/>
                  </div>
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

export default IndividualReview;

