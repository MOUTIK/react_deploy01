import React from 'react'
import Feed from './Sub_components/Feed'
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Home = () => {
  const {searchResults,fetchError,isLoading} = useContext(DataContext);
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading posts...</p>}
      {fetchError && !isLoading && <p className='statusMsg' style={{color:"red"}}>{fetchError}</p>}
      {!fetchError && !isLoading && (searchResults.length ? <Feed posts={searchResults}/> : <p className='statusMsg'>No posts to display.</p>)}
        {/* {posts.length ? (
          <Feed posts={posts}/>
        ): (
          <p style={{marginTop:"2rem"}}>No posts to display.</p>
        )} */}
    </main>
  ) 
}

export default Home