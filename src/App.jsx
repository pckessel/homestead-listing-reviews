import React from 'react';
import AggregateRating from './AggregateRating';
import SpecificRatings from './SpecificRatings';
import ReviewsList from './ReviewsList';

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
        console.log('SUCCESFUL GET REQ WITH --->',data)
        this.setState({
          reviews: data
        })
      }),
      error: ( err => {
        console.log('ERROR IN GET REQ-->', err)
      })
    })
  }

  render() {
    return (
      <div className={"app"}>
        <div className={"ratingsContainer"}>
          <AggregateRating reviews={this.state.reviews}
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