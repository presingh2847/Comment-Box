import React from 'react';
import ReactDOM from 'react-dom';
import {  configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chip from '../Components/Chip';
configure({adapter: new Adapter()});
const wrapper = mount(<Chip label= 'test'/>)
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chip label= 'test' />, div);
  });

  it('should return chip label', () => {
    expect(wrapper.find('.Chip').find('.label').text()).toBe('test')
   
  })
