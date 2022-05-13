import React, { Component } from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import { List_View,Chart_View } from "./utility";

const judgeTab=(current,view)=>{
    return(current===view)?'nav-link active':'nav-link'
}

const ViewTabe = ({ activeTab, OnActiveTab }) => {
  return (
    <ul className="nav nav-tabs nav-fill my-2">
      <li className="nav-item">
        <a 
        className={judgeTab(activeTab,List_View)} 
        href="#"
        onClick={(event)=>{event.preventDefault();OnActiveTab(List_View)}}
        >
        <Ionicon
            className="rounded-circle"
            fontSize="30px"
            style={{backgroundColor:'#007bff',padding:'5px'}}
            color={'#fff'}
            icon='md-list'
        ></Ionicon>
          列表模式
        </a>
      </li>
      <li className="nav-item">
        <a 
        className={judgeTab(activeTab,Chart_View)} 
        href="#"
        onClick={(event)=>{event.preventDefault();OnActiveTab(Chart_View)}}
        >
        <Ionicon
            className="rounded-circle"
            fontSize="30px"
            style={{backgroundColor:'#007bff',padding:'5px'}}
            color={'#fff'}
            icon='md-color-palette'
        ></Ionicon>
          图表模式
        </a>
      </li>
    </ul>
  );
};

ViewTabe.propTypes={
  activeTab:PropTypes.string.isRequired,
  OnActiveTab:PropTypes.func.isRequired,
}
export default ViewTabe