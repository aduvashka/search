import React, { useState, useEffect } from 'react';
import "./styles.css"
import Modal from "./Modal"



function Page() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState(null);
  const [search, setSearch] = useState("");
  const [modalIsOpen, getIsOpen] = useState(false);

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
  }, [search]);

  
   function openModal() {
     getIsOpen(true);
      console.log('111')
  }

    function closeModal(){
      getIsOpen(false);
      console.log('ddd')
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
            onChange={event => setSearch(event.target.value)}
          />
        </form>
        <div className= "article">
          {result &&
            result.hits.map(item => (
              <div className= "item" key={item.objectID}>
                <button>
                  <a href={item.url} target="_blank">
                    {item.title}
                  </a>
                </button>
                <p className="author">Author: {item.author}</p>
                <button className="allComments"
                onClick={openModal}
                >
                  <p className="comments">{item.num_comments}</p>
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onClose={closeModal}
                >
                </Modal>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Page;
