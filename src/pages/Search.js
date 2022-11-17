import { MoreVert } from '@mui/icons-material';
import React from 'react';
import '../css/Search.css';

const Search = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location = '/';
  };

  return (
    <div className='search'>
      <div className='search__layout'>
        <div className='search__header'>
          <h3 className='search__heading'>Type here to search</h3>
          <div className='search__icons'>
            <MoreVert onClick={(e) => handleClick(e)} />
          </div>
        </div>
        <div className='search__body'>
          <input className='search__input' type="text" placeholder='type text and press enter...' />
          <p>Showing 0 results...</p>
        </div>
      </div>
    </div>
  );
};

export default Search;