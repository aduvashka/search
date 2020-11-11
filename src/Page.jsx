import React, { useState, useEffect } from 'react';
import "./styles.css"


function Page() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState(null);
  const [search, setSearch] = useState("");

  


  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${search}`, {
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
        <ol className= "article">
          {result&&
            result.hits.map(item => (
                <li key={item.objectID}>
                <a
                  onClick={handleClick}
                  href={item.url}
                >
                  {item.title}
                </a>
                    <p className= "author">Author: {item.author}</p>
                    <p className= "comments">{item.num_comments}</p>
                </li>
            ))
          }
        </ol>
      </div>
    );
  }
}

export default Page;
