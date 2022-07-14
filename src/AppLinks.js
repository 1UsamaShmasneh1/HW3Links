
import './App.css';
import LinksList from './LinksList';
import React from 'react';


const AppLinks = () => {

  let links = [{id:1, link:"link3", isEditing:false}, {id:2, link:"link1", isEditing:false}, {id:3, link:"link2", isEditing:false}]

  return (
    <div>
      <h1>Links Manager</h1>
      <br />
      <LinksList links = {links} />
    </div>
  )
}

export default AppLinks;
