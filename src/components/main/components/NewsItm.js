import PropTypes from 'prop-types';
import React from 'react';
import LikeBtn from './LikeBtn';
import ViewersCounter from './ViewersCounter';

const NewsItm = (props) =>{
 const {newsID, viewers, onView, onLike} = props;
  const {like, source, author, title, url, publishedAt, urlToImage} = props;
  return (
      <article className='news'>
        <a href ={url}
           onClick={() => onView({newsID, viewers: viewers+1}) }
           target="_blank"
           rel="noopener noreferrer" >
          <figure>
              <img src={urlToImage} className='news-image' alt='news' />
          </figure>

          <section className='news-body'>

          <h3 className="news-title">{title}</h3>
          </section>
        </a>

        <div>
          <address className="fs-italic">Author: {author ? author : source.name}</address>
          <span className="fs-italic">Published at: {
             new Date(publishedAt).toLocaleString()
          }</span>
        </div>

        <div className='complementary'>
          <LikeBtn like={like} onLike={(number)=>onLike({newsID, like: number})}/>
          <ViewersCounter viewers = {viewers}/>
        </div>

      </article>
  )
};

NewsItm.propTypes = {
  onLike: PropTypes.func,
  onView: PropTypes.func,
  like: PropTypes.number,
	viewers: PropTypes.number,
};

NewsItm.defaultProps = {
	like: 0,
	viewers: 0,
  onLike: {},
  onView: {},
};

export default NewsItm;

