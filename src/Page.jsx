import React , { useState, useEffect }  from 'react';



function Page() {
 const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(); 
  
  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${items}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);          
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  })
    
    console.log(items)
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
              // value={items}
             
            /> 
          <button type="submit">Search</button>
        </form>
        {items
          ? items.hits.map(item => {
              return (
                <ul>
                  <li key={item.objectID}>
                    <a href={item.url} target="_blank">{item.title}</a>
                      <p> {item.author}</p>
                      <p>{item.num_comments}</p>
                  </li>
                </ul>
              )
            })
          :"Loading..." }       
      </div>
    );
  }
}

export default Page;
