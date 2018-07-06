import './NewsPanel.css';

import React from 'react';

import NewsCard from '../NewsCard/NewsCard'

class NewsPanel extends React.Component{
  constructor() {
    super();
    this.state = {news:null};
  }

  componentDidMount() {
    this.loadMoreNews();
  }


  loadMoreNews() {
    let request = new Request('http://localhost:5000/news', {
      method: 'GET'
    });

    fetch(request)
      .then(res => res.json())
      .then(news => {
        this.setState({
          news: this.state.news ? this.state.news.concat(news) : news,
        });
      });
  }

  renderNews() {
    let news_list = this.state.news.map((news) => {
      return(
        <div className='list-group-item' key={news.digest}>
          <NewsCard news={news} />
        </div>
      );
    });

    return(
      <div className="container-fluid">
        <div className='list-group'>
          {news_list}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.news) {
        return(
          <div>
            {this.renderNews()}
          </div>
        );
    } else {
      return(
        <div>
          <div id='msg-app-loading'>
            Loading
          </div>
        </div>
      );
    }
  }
}

export default NewsPanel;
