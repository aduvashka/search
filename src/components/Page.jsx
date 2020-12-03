import React, { useState, useEffect } from 'react';
import "./styles.css"
import Modal from "./Modal"
import {connect} from 'react-redux'
import { getError, getLoaded, getUrlApi } from '../store/dataApi/apiReducer';
import fetchApi from '../store/dataApi/fetchApi';

function Page(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState(null);
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = useState(0);
  const [articleId, setArticleId] = useState(null);
  const {
    urlApi,
    loaded,
    // error,
  } = props;
  
  console.log("🚀 ~ file: Page.jsx ~ line 17 ~ Page ~ urlApi", urlApi)


  let url = `https://hn.algolia.com/api/v1/search`;

  if (search) {
    url = `${url}?query=${search}`
  }

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setResult(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [url]);

  function getOpenModal(value) {
    return function () {
      setIsOpen(value);
      setArticleId(value);
    }
  }

  function getCloseModal(value){
    return function () {
      setIsOpen(0);
    }
  }

  if (error) {
    return <div>Oops: {error.message}</div>;
  } else if (!isLoaded) {
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
            onChange={event =>  setSearch(event.target.value)}
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

const mapStateToProps = (state) => ({
  urlApi: getUrlApi(state),
  loaded: getLoaded(state),
  error: getError(state),
})
const mapDispatchToProps = dispatch => ({
    fetchApi: fetchApi
})
export default connect(mapStateToProps,mapDispatchToProps)(Page);
