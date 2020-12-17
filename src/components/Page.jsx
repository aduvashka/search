import React, { useState, useEffect } from 'react';
import "./styles.css"
import Modal from "./Modal"
import {connect} from 'react-redux'
import { setChangeSearch } from '../store/dataApi/actions';
import { getResult, getLoaded, getError } from '../store/dataApi/apiReducer';
import { setFetchApi } from '../store/dataApi/setFetchApi';

function Page(props) {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [result, setResult] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(0);
  const [articleId, setArticleId] = useState(null);

  const {
    error,
    loaded,
    result,
    search,
    setChangeSearch,
    setFetchApi,
  } = props;


  let url = `https://hn.algolia.com/api/v1/search`;

  if (search) {
    url = `${url}?query=${search}`
  }


  useEffect(() => {
    setFetchApi(url)
  }, [url]);



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
    setChangeSearch(event.target.value)
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
          {result &&
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

const mapStateToProps = (state) => {
  return {
    search: state.dataFetch.search,
    result: getResult(state),
    loaded: getLoaded(state),
    error: getError(state),
  }
}

const mapDispatchToProps =  {
  setChangeSearch,
  setFetchApi,
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);
