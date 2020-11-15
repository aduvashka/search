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
    fetch(url, {
     headers: {
    Accept: "application/json",
  },
    })
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

    function handleClick(e) {
      e.preventDefault();
      console.log('click');
  }
  
   function openModal() {
    getIsOpen (true);
  }

    function closeModal(){
    getIsOpen(false);
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
          {result&&
            result.hits.map(item => (
              <div className= "item" key={item.objectID}>
                <button
                onClick={openModal}
                >
                  <Modal
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                  >
                  </Modal>
                  <a
                  onClick={handleClick}
                  href={item.url}
                  >
                  {item.title}
                </a>
                </button>
                    <p className= "author">Author: {item.author}</p>
                    <p className= "comments">{item.num_comments}</p>
                </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Page;
