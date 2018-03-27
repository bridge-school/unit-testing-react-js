import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// http://airbnb.io/enzyme/docs/api/ReactWrapper

it('should make sure strings are as long as they are supposed to be', () => {
  expect('hello'.length).toBe(5);
  expect('hey'.length).not.toBe(5);
});


it('renders without crashing', () => {
  shallow(<App />);
});

const MyListTest = ({items, current}) => <div>
  {items.map((item, i) => <h2
    key={i}
    className={`${current === i ? 'cool-class' : ''}`}>
    {item}
    </h2>)}
</div>;


it('should render each item as an h2', () => {
  const wrapper = shallow(<MyListTest items={['foo', 'bar', 'foobar']} />);
  expect(wrapper.find('h2').length).toBe(3);
});


it('should give the current index item the class cool-name', () => {
  const currentIndex = 1;
  const myList = Array.from({length: 50}, (_, i) => i + 1);
  const wrapper = shallow(<MyListTest items={myList} current={currentIndex} />);
  const items = wrapper.find('h2');

  expect(items.filter('.cool-class').length).toBe(1);
  expect(items.at(currentIndex).hasClass('cool-class')).toBeTruthy();
});
