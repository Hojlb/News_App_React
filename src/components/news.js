import PropTypes from 'prop-types';
import React from 'react';

const News = (news) =>
  <React.Fragment>
    <section className='news'>
      <article>
        <figure>
          <a href ={news.url}>
            <img src={news.urlToImage} className='news-image' alt='news' />
          </a>
        </figure>
        <h2 className="news-title">{news.title}</h2>
        <address>{news.author ? "Author:" + news.author : ""}</address>
      </article>
    </section>
  </React.Fragment>;

News.propTypes = {
  news: PropTypes.array,
};

export default News;

