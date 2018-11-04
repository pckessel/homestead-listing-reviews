import React from 'react';
import { shallow, mount, render } from './jest.setup.js';
import App from '../src/App.jsx';
import AggregateRating from '../src/AggregateRating.jsx';
import ReviewsList from '../src/ReviewsList.jsx';
import IndividualReview from '../src/IndividualReview.jsx';
import SpecificRatings from '../src/SpecificRatings.jsx';
import reviewText from '../src/reviewText.jsx';


test('Expect App to exist', () => {
  expect(<App/>).toBeDefined();
});

describe('<App />', () => {
  const wrapper = mount(<App/>);
  it('renders an AggregateRating Component', () => {
    expect(wrapper.find(AggregateRating)).toBeDefined();
  })
  it('should have a ratingsContainer class', () => {
    const ratingsContainerClass = wrapper.find('.ratingsContainer').props();
    expect(ratingsContainerClass.className).toBeTruthy();
  })
  it('renders a SpecificRatings Component', () => {
    expect(wrapper.find(SpecificRatings)).toBeDefined();
  })
  it('renders a Reviews List Component', () => {
    expect(wrapper.find(ReviewsList)).toBeDefined();
  })
   it('should have a reviewsListContainer class', () => {
    const reviewsListContainerClass = wrapper.find('.reviewsListContainer').props();
    expect(reviewsListContainerClass.className).toBeTruthy();
  })
  it('renders an IndividualReview Component', () => {
    expect(wrapper.find(IndividualReview)).toBeDefined();
  })
  it('renders a reviewText Component', () => {
    expect(wrapper.find(reviewText)).toBeDefined();
  })
});

describe('<IndividualReview />', () => {
  const wrapper = mount(<IndividualReview />);
  it('should have a userImage class for every individualReview', () => {
    expect(wrapper.find('.individualReview').every('.userImage')).toBe(true);
  })
  it('should have render a userName for every individualReview', () => {
    expect(wrapper.find('.individualReview').every('.userName')).toBe(true);
  })
  it('should show a reviewDate for each review', () => {
    expect(wrapper.find('.individualReview').every('.reviewDate')).toBe(true);
  })
  it('should render a <reviewText/> component for every individualReview', () => {
    expect(wrapper.find('.individualReview').every(<reviewText/>)).toBe(true);
  })
})


