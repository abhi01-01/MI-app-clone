import React from 'react';
const offer = ({src,link,index}) => {
  return <a href={link}> <img src={src} alt={`${index} offer`} /></a>
};
export default offer
