var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const news = [
    {
      title: 'News1',
      urlToImage: 'https://pic3.zhimg.com/v2-e505ddbe00a4677fa1f2e95b69f9ea4a.jpg',
      description: "The ruling sends a strong message that Trump has broad powers under immigration law to act to protect national security and that statements made during a campaign may not be legally determinative of the President's intent.",
      url: 'http://www.baidu.com',
      digest: '3qwqeqweqweqdx',
      source: 'CNN',
      reason: 'Hot',
      time: "2017-05-18"
    },
    {
      title: 'News2',
      urlToImage: 'https://pic3.zhimg.com/v2-e505ddbe00a4677fa1f2e95b69f9ea4a.jpg',
      description: "The ruling sends a strong message that Trump has broad powers under immigration law to act to protect national security and that statements made during a campaign may not be legally determinative of the President's intent.",
      url: 'http://www.baidu.com',
      digest: '3qwwesvcxxqqdx',
      source: 'BBC',
      reason: 'Hot',
      time: "2017-05-18"
    },
    {
      title: 'News1',
      urlToImage: 'https://pic3.zhimg.com/v2-e505ddbe00a4677fa1f2e95b69f9ea4a.jpg',
      description: "The ruling sends a strong message that Trump has broad powers under immigration law to act to protect national security and that statements made during a campaign may not be legally determinative of the President's intent.",
      url: 'http://www.baidu.com',
      digest: '3qwqeqweqweqdx',
      source: 'CNN',
      reason: 'Hot',
      time: "2017-05-18"
    },
    {
      title: 'News2',
      urlToImage: 'https://pic3.zhimg.com/v2-e505ddbe00a4677fa1f2e95b69f9ea4a.jpg',
      description: "The ruling sends a strong message that Trump has broad powers under immigration law to act to protect national security and that statements made during a campaign may not be legally determinative of the President's intent.",
      url: 'http://www.baidu.com',
      digest: '3qwwesvcxxqqdx',
      source: 'BBC',
      reason: 'Hot',
      time: "2017-05-18"
    }
  ];
  res.json(news);
});

module.exports = router;
