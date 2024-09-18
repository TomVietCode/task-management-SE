import React, { useState } from 'react';
import './style.scss';
import { toggleMenu } from './helpers';
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { BsLayoutSidebarInset } from "react-icons/bs";


function Sidebar() {
  const [isOpenTask, setIsOpenTask] = useState(true);
  const [isOpenSidebar, setIsOpenSidebar] = useState(true); 

  return (
    <>
      {!isOpenSidebar && (
        <div className="sidebar-toggle" onClick={() => setIsOpenSidebar(true)}>
          <BsLayoutSidebarInset/>
        </div>
      )}
     
      <div className={`sidebar ${isOpenSidebar ? 'open' : ''}`}>
        <div className="sidebar__Account">Account
          <div className="sidebar__Account-menu" onClick={() => setIsOpenSidebar(false)}>
            <BsLayoutSidebarInsetReverse />
          </div>
        </div>
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__item-text">
              <span className="sidebar__item-text-icon icon-plus">
                <i className="fa-solid fa-circle-plus"></i>
              </span>
              Create Project
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__item-text">
              <span className="sidebar__item-text-icon">
                <i className="fa-solid fa-house"></i>
              </span>
              Home
            </a>
          </div>
          <div className="sidebar__item" onClick={() => toggleMenu(isOpenTask, setIsOpenTask)}>
            <a className="sidebar__item-text">
              <span className="sidebar__item-text-icon">
                <i className="fa-solid fa-list-check"></i>
              </span>
              My Project
            </a>
          </div>
          {isOpenTask && (
            <div className="sidebar__list-dropdownMenu">
              <div className="sidebar__list-dropdownMenu-item">
                <span className="sidebar__list-dropdownMenu-item-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </span>
                <span>Project 1</span>                
              </div>
              
              <div className="sidebar__list-dropdownMenu-item">
                <span className="sidebar__list-dropdownMenu-item-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </span>
                <span>Project 2</span>    
              </div>

              <div className="sidebar__list-dropdownMenu-item">
                <span className="sidebar__list-dropdownMenu-item-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </span>
                <span>Project 3</span>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
