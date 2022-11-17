import { MoreVert, Search as SearchIcon } from '@mui/icons-material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';
import moduleContent from '../moduleContent.json';
import '../css/Module.css';
import { useStateValue } from '../StateProvider';
import Search from '../pages/Search';

const Module = () => {
  const [{ moduleNumber }] = useStateValue();
  const [isSearch, setIsSearch] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    window.location = '/';
  };

  return (
    <>
      {!isSearch ?
        (
          <div className='module'>
            <div className='module__layout'>
              <div className='module__header'>
                <h3 className='module__heading'>{moduleNumber}</h3>
                <div className='module__icons'>
                  <SearchIcon onClick={() => setIsSearch(true)} />
                  <MoreVert onClick={(e) => handleClick(e)} />
                </div>
              </div>
              <div className='module__tabContainer'>
                {
                  moduleContent.map((module, index) => (
                    <Tabs className='module__tabs' key={index}>
                      <TabList>
                        {
                          module[moduleNumber].tabsInfo.tabs.map((tab, tabIndex) => (
                            <Tab key={tabIndex}>
                              {tab}
                            </Tab>
                          ))
                        }
                      </TabList>
                      {
                        module[moduleNumber].tabsInfo.tabParaGraphs.map((content, contentIndex) => (
                          <TabPanel className='module__tabPanel' key={contentIndex}>
                            <div className='module__tabImage' style={{ background: `url(${module[moduleNumber].tabsInfo.tabImages[contentIndex]}) no-repeat` }}></div>
                            <div className='module__tab'>
                              <h3>{module[moduleNumber].tabsInfo.tabHeadings[contentIndex]}</h3>
                              <p>{content}</p>
                            </div>
                          </TabPanel>
                        ))
                      }
                    </Tabs>
                  ))}
              </div>
            </div>
          </div >
        )
        :
        (
          <Search />
        )
      }
    </>
  );
};

export default Module;
