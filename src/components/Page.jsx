import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import "./styles.css"
import Modal from "./Modal"
import { setChangeSearch } from '../store/dataApi/actions';
import { setFetchApi } from '../store/dataApi/setFetchApi';

function Page(props) {

  const error = useSelector(state => state.dataFetch.isError);
  const loaded = useSelector(state => state.dataFetch.isLoaded);
  const result = useSelector(state => state.dataFetch.isResult);
  const search = useSelector(state => state.dataFetch.search);
  const [modalIsOpen, setIsOpen] = useState(0);
  const [articleId, setArticleId] = useState(null);
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
      setIsOpen(value);
      setArticleId(value);
    }
  }

  function getCloseModal(){
    return function () {
      setIsOpen(0);
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
                  <a href={article.url} target="_blank">
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
          { modalIsOpen &&
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