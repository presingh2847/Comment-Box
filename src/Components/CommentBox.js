import React from 'react';
import Chip from './Chip'
import  '../CSS/CommentBox.css'
import PropTypes from 'prop-types';


export default class CommentBox extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick =() => {
        alert('Function was called')
    }
    render() {
        let imagePath =  this.props.commentData.userImage
        return (
            <div className='Container'>
                <div className='UserImage'><img className='Image' src=  {require('../Image/'+imagePath)}  /> </div>
                <div className='Comment'>
                    <div className='Header'>
                        <h2>{this.props.commentData.author}</h2><Chip label='Author'/> <div className='timestamp'><li>{this.props.commentData.commentAttributes.timeStamp}</li></div>
                    </div>
                    <div className='CommentBody'>{this.props.commentData.commentBody}</div>                    
                    <div className='Footer'>
                        <button className='button' id='reply' onClick={this.handleClick}>REPLY</button>
                        <button className='button' id='replies' onClick={this.handleClick}>{this.props.commentData.commentAttributes.replies} REPLIES</button>
                        <button className='button' id='agree' onClick={this.handleClick}><i className="up"></i>{this.props.commentData.commentAttributes.agree}</button>
                        <button className='button' id='disagree' onClick={this.handleClick}><i className="down"></i>{this.props.commentData.commentAttributes.disagree}</button>
                    </div>
                </div>
            </div>
        );
    }
}

CommentBox.propTypes = {
    userImage:  PropTypes.string,
    commentData: PropTypes.shape({
        author: PropTypes.string.isRequired,
        commentBody: PropTypes.string.isRequired,
        commentAttributes: PropTypes.shape({
            agree: PropTypes.number.isRequired,
            disagree: PropTypes.number.isRequired
        })
      })
   
  };

  CommentBox.defaultProps = {
    commentData: PropTypes.shape({
        author:'Author Name',
        commentBody: 'Placeholder for comment body',
        commentAttributes: PropTypes.shape({
            agree: 0,
            disagree: 0
        })
      })
  }
