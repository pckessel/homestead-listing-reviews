import React from 'react';

function IndividualReview (props) {

  if (props.reviews) {
    return (
      <div>
        {props.reviews.map( review => {
          return (
            <div key={review.reviewId}>
              <div>
                <img src={review.userImage} height={"60"} width={"50"}></img>
                <div>
                  <div>{review.userName}</div>
                  <div>{review.date}</div>
                </div>
              </div>
              <div>
                <div>{review.reviewText}</div>
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