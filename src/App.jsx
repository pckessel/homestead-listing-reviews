import React from 'react';
import AggregateRating from './AggregateRating';
import SpecificRatings from './SpecificRatings';
import ReviewsList from './ReviewsList';
import stars from './stars.jsx';
import './style.css';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: undefined,
    }
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    const rand = Math.floor(Math.random() * 101)
    const id = Number(window.location.pathname.replace(/\//, '')) || rand;
    this.getReviews(id);
  }

  getReviews(num) {
    axios
      .get(`/listing/${num}`)
      .then( data =>  this.setState({ reviews: data.data }) )
      .catch(err => console.log("ERROR WITH REQUEST-->", err));
  }

  createStars (rating) {
    var results = [];
    let counter = 1;
    while(counter <= 5) {
      if (rating > 0.75) {
        results.push(<div className={"starSpot"}>{stars.star}</div>);
        counter++;
        rating--;
      } else if (rating > 0.25 && rating < 0.75) {
        results.push(<div className={"starSpot"}>{stars.halfStar}</div>);
        counter++;
        rating--;
      } else {
        results.push(<div className={"starSpot"}>{stars.emptyStar}</div>);
        counter++;
        rating--;
      }
    }
    return results;
  }

  render() {
    return (
      <div className={"listingReviewsWrapper"}>
        {/* <div className={"ratingsContainer"}>
          <AggregateRating reviews={this.state.reviews}
            createStars={this.createStars}
          />
        </div>
        <div className={"reviewsListContainer"}>
        <ReviewsList reviews={this.state.reviews}
        />
        </div> */}
      </div>
    )
  }
}

export default App;