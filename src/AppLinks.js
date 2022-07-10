import logo from './logo.svg';
import './App.css';
import Links from './Links';
import LinksList from './LinksList';
import React,{useState} from 'react';


const AppLinks = () => {

  let links = [{link:"link3", canUpdate:false}, {link:"link1", canUpdate:false}, {link:"link2", canUpdate:false}]

  return (
    <div>
      <h1>Links Manager</h1>
      <br />
      <LinksList links = {links} />
    </div>
  )
}

export default AppLinks;
