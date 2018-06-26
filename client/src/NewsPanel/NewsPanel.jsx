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
    this.setState({
      news: [
        {
          title: 'News1',
          urlToImage: 'https://pic3.zhimg.com/v2-e505ddbe00a4677fa1f2e95b69f9ea4a.jpg',
          description: 'This is a description.',
          url: 'http://www.baidu.com',
          source: 'CNN',
          reason: 'Hot',
          time: Date.now()
        }
      ]
    });
  }

  renderNews() {
    let news_list = this.state.news.map(function(news) {
      return(
        <a className='list-group-item' key={news.digest} href="#">
          <NewsCard news={news} />
        </a>
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
