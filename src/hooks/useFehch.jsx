import React, { useState, useEffect } from 'react';

const useFehch = (url) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })}
    , [url]);

  return (
    data
  );
  
};

export default useFehch;