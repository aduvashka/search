import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import "../../"
import Modal from "../Modal/Modal"
import {
  setFetchApi,
  setModalIsOpen,
  setArticleId,
  setChangeSearch,
} from '../../redux/dataApi';
import "./Page.css";


function Page(props) {

  const error = useSelector(state => state.dataFetch.error);
  const loaded = useSelector(state => state.dataFetch.loaded);
  console.log("🚀 ~ file: Page.jsx ~ line 16 ~ Page ~ loaded", loaded)
  const result = useSelector(state => state.dataFetch.result);
  console.log("🚀 ~ file: Page.jsx ~ line 17 ~ Page ~ result", result)
  const search = useSelector(state => state.dataFetch.search);
  const modalIsOpen = useSelector(state => state.dataFetch.modal);
  const articleId = useSelector(state => state.dataFetch.articleId);

  const dispatch = useDispatch();

  let url = `https://hn.algolia.com/api/v1/search`;

  if (search) {
    url = `${url}?query=${search}`
  }


  useEffect(() => {
    dispatch(setFetchApi(url))
  }, [dispatch, url]);


  function getOpenModal(value) {
    return function () {
      dispatch(setModalIsOpen(value));
      dispatch(setArticleId(value));
    }
  }

  function getCloseModal(){
    return function () {
      dispatch(setModalIsOpen(0))
    }
  }


  function onSearchChange(event){
    dispatch(setChangeSearch(event.target.value));
  }

  if (error) {
    return <div>Oops: {error.message}</div>;
  } else if (!loaded) {
    return <div>Loaded...</div>;
  } else {
    return (
      <div className= "page" >
        <form
          onSubmit={e=>{
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search.."
            value={search}
            onChange={onSearchChange}
          />
        </form>
        <div className= "article">
          {result.hits &&
            result.hits.map(article => (
              <div className= "item" key={article.objectID}>
                <button>
                  <a href={article.url} target="_blank" rel="noreferrer">
                    {article.title}
                  </a>
                </button>
                <p className="author">Author: {article.author}</p>
                <button
                  className="allComments"
                  onClick={getOpenModal(article.objectID)}
                >
                  <p className="comments">{article.num_comments}</p>
                </button>
              </div>
            ))
          }
          {modalIsOpen &&
            <Modal
              isOpen={articleId}
              onClose={getCloseModal(articleId)}
              articleId={articleId}
            />
          }
        </div>
      </div>
    );
  }
}

export default Page;