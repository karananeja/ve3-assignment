import { East } from '@mui/icons-material';
import React, { useState } from 'react';
import Loader from '../components/Loader';
import '../css/Home.css';
import { useStateValue } from '../StateProvider';

const Home = () => {
  const [showModules, setShowModules] = useState(false);
  const [selectModule, setSelectModule] = useState(false);
  const [moduleText, setModuleText] = useState('');

  const [{ }, dispatch] = useStateValue();

  const moduleNumbers = ['One', 'Two', 'Three', 'Four', 'Five'];

  const handleShowModules = () => {
    setShowModules(true);
  };

  const showModule = () => {
    if (moduleText.length === 0) alert('Please select any Module..!');
    else {
      setSelectModule(true);
      dispatch({
        type: 'GET_NUMBER',
        loading: true,
        moduleNumber: moduleText
      });
    }
  };

  return (
    <>
      {!selectModule ?
        (
          <div className='home'>
            <div className='home__layout'>
              <div className='home__layout__left'></div>
              <div className='home__layout__right'>
                {!showModules ? (
                  <>
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolorsit amet consectetur, adipisicing elit. Excepturi sit eaque, exercitationem praesentium ad nulla quasi ratione distinctio repellat, omnis debitis veritatis neque dolorem officia ut aliquip ex ea commodo consequat.</p>
                    <button className='home__layout__btn' onClick={handleShowModules}>Select Module <East /></button>
                  </>
                ) : (
                  <>
                    {
                      moduleNumbers.map((moduleNumber, index) => (
                        <ul key={index}>
                          <li className='home__layout__list'>
                            <input className='home__layout__radio' type='radio' id={`module${moduleNumber}`} name={`module${moduleNumber}`} defaultValue={`module${moduleNumber}`} />
                            <label htmlFor={`module${moduleNumber}`} onClick={e => setModuleText(e.target.innerText)}>Module {moduleNumber}</label>
                          </li>
                        </ul>
                      ))
                    }
                    <button className='home__layout__btn' onClick={showModule}>Select Module <East /></button>
                  </>
                )}
              </div>
            </div>
          </div>
        )
        :
        (
          <Loader />
        )
      }
    </>
  );
};

export default Home;