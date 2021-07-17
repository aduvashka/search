import React, { Fragment, useEffect } from 'react';
import Comments from '../Comments/Comments';
import "./Modal.css";
import { useSelector, useDispatch } from 'react-redux'
import { setStoryApi } from '../../redux/modal';


function Modal(props) {
  const {
    onClose,
    articleId,
  } = props;

  const storyId = useSelector(state => state.dataStoryId.storyId);
  const dispatch = useDispatch();

  let url = `https://hn.algolia.com/api/v1/items`;

  if (articleId) {
    url=`${url}/${articleId}`
  }

  useEffect(() => {
    dispatch(setStoryApi(url))
  }, [dispatch, url]);


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
