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
          description: "The ruling sends a strong message that Trump has broad powers under immigration law to act to protect national security and that statements made during a campaign may not be legally determinative of the President's intent.",
          url: 'http://www.baidu.com',
          source: 'CNN',
          reason: 'Hot',
          time: "2017-05-18"
        },
        {
          title: 'News2',
          urlToImage: 'https://pic3.zhimg.com/v2-e505ddbe00a4677fa1f2e95b69f9ea4a.jpg',
          description: "The ruling sends a strong message that Trump has broad powers under immigration law to act to protect national security and that statements made during a campaign may not be legally determinative of the President's intent.",
          url: 'http://www.baidu.com',
          source: 'BBC',
          reason: 'Hot',
          time: "2017-05-18"
        }
      ]
    });
  }

  renderNews() {
    let news_list = this.state.news.map(function(news) {
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
