import { MoreVert, Search as SearchIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import '../css/Search.css';
import modifiedModuleContent from '../modifiedModuleContent.json';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchContent, setSearchContent] = useState([]);

  const moduleNames = ['Module One', 'Module Two', 'Module Three', 'Module Four', 'Module Five'];

  const handleSearch = () => {
    setSearchContent([]);
    modifiedModuleContent.map(module => (
      moduleNames.map(name => {
        Object.keys(module[name].tabsInfo).forEach(tab => {
          if (module[name].tabsInfo[tab].heading.toLowerCase().includes(search) && module[name].tabsInfo[tab].paragraph.toLowerCase().includes(search) && search.length > 0) setSearchContent(content => [...content, module[name].tabsInfo[tab]]);
        });

        return searchContent;
      })
    ));
  };

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
          <p>Showing {searchContent.length > 0 ? `${searchContent.length}` : '0'} results...</p>
          {
            searchContent.length > 0 && searchContent.map((content, index) => (
              <div className='search__result' key={index}>
                <div className='search__result__left' style={{ background: `url(${content.image}) 0 0/contain no-repeat` }}></div>
                <div className='search__result__right'>
                  <h3>
                    {content.heading}
                  </h3>
                  <p>
                    {content.paragraph}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Search;