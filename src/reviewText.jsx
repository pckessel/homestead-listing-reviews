import React from 'react';

class ReviewText extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showAll: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({
      showAll: true
    });
  }

  render () {
    var text = this.props.reviewText;
    if (text.length > 180 && !this.state.showAll) {
      this.state.showAll = true;
      return (
        <div className={"reviewText"}>{text.slice(0,180) + "... "}
          <div className={"showMore"} onClick={this.handleClick}>show more</div>
        </div>)
    }
    return (
        <div className={"reviewText"}>
          {text}
        </div>
        )
  }
}

export default ReviewText



