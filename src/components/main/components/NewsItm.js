import PropTypes from 'prop-types';
import React from 'react';
import BtnLike from './ButtonLike';
import ViewersCounter from './ViewersCounter';

const NewsItm = (props) =>{
 const {newsID, viewers, onView, onLike} = props;
  return (
    <React.Fragment>
      <article className='news'>
        <a href ={props.url} onClick={() => onView({newsID, viewers: viewers+1}) } target="_blank"  rel="noopener noreferrer" >
          <figure>
              <img src={props.urlToImage} className='news-image' alt='news' />
          </figure>

          <section className='news-body'>

          <h3 className="news-title">{props.title}</h3>
            {/*fs - font-style*/}
          </section>
        </a>

        <div>
          <address className="fs-italic">Author: {props.author ? props.author : props.source.name}</address>
          <span className="fs-italic">Published at: {
             new Date(props.publishedAt).toLocaleString()
          }</span>
        </div>

        <div className='complementary'>
          <BtnLike like={props.like} onLike={(like)=>onLike({newsID, like})}/>
          <ViewersCounter viewers = {props.viewers}/>
        </div>

      </article>
  </React.Fragment>
  )
};

NewsItm.propTypes = {
  onLike: PropTypes.func,
  like: PropTypes.number,
	viewers: PropTypes.number,
};

NewsItm.defaultProps = {
	like: 0,
	viewers: 0,
  onLike: {},
};

export default NewsItm;

