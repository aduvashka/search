import React, { Fragment, useEffect,useState } from 'react';
import Comments from './Comments';
import "./Modal.css";


function Modal(props) {
  const {
    onClose,
    articleId,
  } = props;


  // const [isLoaded, setIsLoaded] = useState(false);
  const [storyId, setStoryId] = useState(null);

  let url = `https://hn.algolia.com/api/v1/items`;

  if (articleId) {
    url=`${url}/${articleId}`
  }

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (story) => {
          // setIsLoaded(true);
          setStoryId(story);
        }
      )
  }, [url]);

    return (
      <Fragment>
        <div className="modal">
          <button className="close" onClick={onClose}>Close</button>
          {storyId &&
            <Comments comments={storyId.children} />
          }
        </div>

      </Fragment>
    )
  }


export default Modal;
