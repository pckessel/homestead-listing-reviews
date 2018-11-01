import React from 'react';
import Moment from 'react-moment';

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
                <div className={"reviewText"}>{review.reviewText}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div>NO DATA YET</div>
    )
  }
}

export default IndividualReview;
