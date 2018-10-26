import React from 'react';
const $ = require ('jquery');

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hello: props.hello
    }
  }

  ComponentDidMount () {
    this.getReviews();
  }

  getReviews() {
    $.ajax({
      url: '/listing-reviews',
      contentType: 'application/json',
      method: 'GET',
      success: ( data => {
        console.log('SUCCESFUL GET REQ WITH --->',data)
      }),
      error: ( err => {
        console.log('ERROR IN GET REQ-->', err)
      })
    })
  }

  render() {
    return (
        <h1>{this.state.hello}</h1>
      )
  }

}

export default App;