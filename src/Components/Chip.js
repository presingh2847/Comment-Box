import React from 'react';
import  '../CSS/Chip.css'


export default class Chip extends React.Component {
 
    render() {
      return (
      <div className='Chip'>
        <div className='label'>{this.props.label}</div> 
          </div>
      );
    }
  }