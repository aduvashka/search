import React, { Fragment } from 'react';
import './index';


function Comments(props) {
  const { comments } = props;

  return (
    <Fragment>
      { comments.map(comment => (
        <div className="comment" key={comment.id}>
          <h3>{comment.author}</h3>
            <p dangerouslySetInnerHTML={{ __html: comment.text }}/>
              <div className='nextComment'>
                {comment.children && comment.children.length ? <Comments comments={comment.children}  /> : null}
              </div>
        </div>
      ))}
    </Fragment>
  )
}

export default Comments;
