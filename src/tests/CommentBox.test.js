import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentBox from '../Components/CommentBox';

configure({adapter: new Adapter()});
var data = 
  {
    "author" : "Prerna Singh",
    "commentBody" : "test comment",
     "commentAttributes": {
      "replies" : 21,
      "agree" : 123,
      "disagree" : 0,
      "timeStamp" : "2 MINUTES AGO"
     },
     "userImage" : "GrumpyCat.jpg"
  }
  const wrapper = mount(<CommentBox commentData= {data} />)
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CommentBox commentData= {data} />, div);
  });

  it('should return author,comment,userImage,commentAttributes', () => {
    expect(wrapper.find('.Container').find('.Header').find('h2').text()).toBe('Prerna Singh')
    expect(wrapper.find('.CommentBody').text()).toBe('test comment')
    expect(wrapper.find('.UserImage').find('img').prop('src').includes('GrumpyCat.jpg'))
    expect(wrapper.find('.Footer').find('#reply').text()).toBe('REPLY')
    expect(wrapper.find('.Footer').find('#replies').text()).toBe('21 REPLIES')
    expect(wrapper.find('.Footer').find('#agree').text()).toBe('123')
    expect(wrapper.find('.Footer').find('#disagree').text()).toBe('0')
  })

  
