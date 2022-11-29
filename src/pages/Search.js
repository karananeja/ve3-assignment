import { MoreVert, Search as SearchIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import '../css/Search.css';
import moduleContent from '../moduleContent.json';

const Search = () => {
  const [search, setSearch] = useState('');
  const [headings, setHeadings] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);

  const moduleNames = ['Module One', 'Module Two', 'Module Three', 'Module Four', 'Module Five'];

  const handleSearch = () => {
    moduleContent.map(module => (
      moduleNames.map(name => {
        module[name].tabsInfo.tabHeadings.map(headingList => {
          if (headingList.toLowerCase().includes(search) && search.length !== 0) setHeadings(arr => [...arr, headingList]);
        });

        module[name].tabsInfo.tabParaGraphs.map(paragraphList => {
          if (paragraphList.toLowerCase().includes(search) && search.length !== 0) setParagraphs(arr => [...arr, paragraphList]);
        });
      })
    ));
  };

  console.log(headings, paragraphs);

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
          <div className='search__input__container'>
            <input className='search__input' type="text" placeholder='type text and press enter...' value={search} onChange={(e) => setSearch(e.target.value)} />
            <SearchIcon onClick={handleSearch} />
          </div>
          <p>Showing {headings.length > 0 && paragraphs.length > 0 ? paragraphs.length > headings.length ? `${paragraphs.length}` : `${headings.length}` : '0'} results...</p>
        </div>
      </div>
    </div>
  );
};

export default Search;