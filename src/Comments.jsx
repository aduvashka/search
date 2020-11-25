import React, { Fragment } from 'react';
import './index';


function Comments(props) {
  const { comments } = props;


  return (

    <Fragment>
      { comments &&
        comments.children.map(comment => (
        <div className="comment" key={comment.id}>
          <h3>{comment.author}</h3>
            <p dangerouslySetInnerHTML={{ __html: comment.text }}></p>

          {/* {item.children && 
            item.children.length > 0 ? <Comments comment={comment} /> : null} */}
        </div>
      ))}
    </Fragment>

  )
}

export default Comments;
