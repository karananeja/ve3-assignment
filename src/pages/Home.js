import { East } from '@mui/icons-material';
import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__layout'>
        <div className='home__layout__left'></div>
        <div className='home__layout__right'>
          <h1>Lorem ipsum dolor</h1>
          <p>Lorem ipsum dolorsit amet consectetur, adipisicing elit. Excepturi sit eaque, exercitationem praesentium ad nulla quasi ratione distinctio repellat, omnis debitis veritatis neque dolorem officia ut aliquip ex ea commodo consequat.</p>
          <button className='home__layout__btn'>Select Module <East /></button>
        </div>
      </div>
    </div>
  );
};

export default Home;