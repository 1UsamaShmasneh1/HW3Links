
import './App.css';
import LinksList from './LinksList';
import React from 'react';


const AppLinks = () => {

  let links = [{link:"link3"}, {link:"link1"}, {link:"link2"}]

  return (
    <div>
      <h1>Links Manager</h1>
      <br />
      <LinksList links = {links} />
    </div>
  )
}

export default AppLinks;
