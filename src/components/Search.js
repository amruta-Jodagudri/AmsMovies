// import React from 'react';
// import {useGlobalContext} from './context';

// const Search = () => {
//   const {query,setquery,isError} = useGlobalContext();
//   return (
//     <section className='search-section'>
//       <h2>Search Your Favourite Movie</h2>
//       <form action='#' onSubmit={(e)=>e.preventDefault()}>
//         <div>
//           <input type='text' placeholder='Search Here' value={query} onChange={(e)=>setquery(e.target.value)}/>
//         </div>
//       </form>
//       <div className="card-error">
//         <p>{isError.show && isError.msg}</p>
//       </div>
//     </section>
//   );
// }

// export default Search;


import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setquery, isError } = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError && isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;