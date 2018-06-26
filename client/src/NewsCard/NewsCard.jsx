import './NewsCard.css';

import React from 'react';

class NewsCard extends React.Component{
  redirectToUrl(url) {
    window.open(url, '_blank'); // open a new page.
  }

  render() {
    return(
      <div className="row">
        <div className="col s0 m2 l3" />
        <div className="col s12 m8 l6">
          <div className="card large">
            <div className="card-image">
              <img src={this.props.news.urlToImage} alt=""/>
              <span className="card-title">
                {this.props.news.title}
              </span>
            </div>
            <div className="card-content">
              <p>
                {this.props.news.description}
              </p>
            </div>
            <div className="card-action">
              <div>
                {this.props.news.source != null && <div className="chip">{this.props.news.source}</div>}
                {this.props.news.reason != null && <div className="chip">{this.props.news.reason}</div>}
                {this.props.news.time != null && <div className="chip">{this.props.news.time}</div>}
              </div>
              <a onClick={() => this.redirectToUrl(this.props.news.url)}>Read More</a>
            </div>
          </div>
        </div>
        <div className="col s0 m2 l3" />
      </div>
    );
  }
}

export default NewsCard;
