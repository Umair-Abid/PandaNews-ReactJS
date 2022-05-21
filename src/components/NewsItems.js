import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,date} = this.props;

    return (
      <div> 
      
     <div className="card"  >
  <img src={imgUrl ? imgUrl: 'https://images.pushsquare.com/77bdfcf1e029c/1280x720.jpg '} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">Published On: {new Date(date).toUTCString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More...</a>
  
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems
