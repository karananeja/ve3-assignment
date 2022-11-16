import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useStateValue } from '../StateProvider';
import '../css/Loader.css';
import Module from '../modules/Module';

const Loader = () => {
  const [{ loading }] = useStateValue();

  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setInterval(() => { setIsLoading(false); }, 1000);
  });

  return (
    <div className='loader'>
      {isLoading ?
        (
          <ReactLoading className='loader__loading' type='spin' color='#0d4f8c' height={100} width={50} />
        )
        :
        (
          <Module />
        )
      }
    </div>
  );
};

export default Loader;