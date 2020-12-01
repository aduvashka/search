import React, { useState, useEffect } from 'react';
import "./styles.css"
import Modal from "./Modal"


function Page() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState(null);
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = useState(0);
  const [articleId, setArticleId] = useState(null);


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

export default Page;
