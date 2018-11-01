import React from 'react';
import { shallow, mount, render } from './jest.setup.js';
import App from '../src/App.jsx';
import AggregateRating from '../src/AggregateRating.jsx';
import ReviewsList from '../src/ReviewsList.jsx';
import IndividualReview from '../src/IndividualReview.jsx';


test('Expect App to exist', () => {
  expect(<App/>).toBeDefined();
});

describe('<App />', () => {
  const wrapper = mount(<App/>);
  it('renders a Reviews List Component', () => {
    expect(wrapper.find(ReviewsList)).toBeDefined();
  })
  it('renders an AggregateRating Component', () => {
    expect(wrapper.find(AggregateRating)).toBeDefined();
  })
})

describe('<IndividualReview/>', () => {
  it('should find individual-review class name', () => {
    const w = mount(<App/>);
    console.log(w.debug())
    expect(w.find('.individual-review').exists()).to.equal(true);
  })
})
