import React from 'react';
import AggregateRating from './AggregateRating';
import SpecificRatings from './SpecificRatings';
import ReviewsList from './ReviewsList';
import stars from './stars.jsx';

const $ = require ('jquery');

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: undefined,
    }
  }

  componentDidMount () {
    this.getReviews(7);
  }

  getReviews(num) {
    $.ajax({
      url: `/listing-reviews/${num}`,
      contentType: 'application/json',
      method: 'GET',
      success: ( data => {
        this.setState({
          reviews: data
        })
      }),
      error: ( err => {
        console.log('ERROR IN GET REQ-->', err)
      })
    })
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
      <div className={"app"}>
        <div className={"ratingsContainer"}>
          <AggregateRating reviews={this.state.reviews}
            createStars={this.createStars}
          />
        </div>
        <div className={"reviewsListContainer"}>
        <ReviewsList reviews={this.state.reviews}
        />
        </div>
      </div>
    )
  }
}

export default App;