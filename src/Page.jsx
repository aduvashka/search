import React , { useState, useEffect }  from 'react';



function Page() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
  fetch(`https://hn.algolia.com/api/v1/search?query=${search}`)
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
  },[search]); 
   

  


  if (error) {
    return <div>Oops: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loaded...</div>;
  } else {
    return (
      <div className="page">
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
        <ul>
          {result&&
            result.hits.map(item => (
              
                <li key={item.objectID}>
                    <a href={item.url}  >{item.title}</a>
                    <p> {item.author}</p>
                    <p>{item.num_comments}</p>
                </li>
   
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Page;
