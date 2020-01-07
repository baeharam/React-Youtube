import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFire } from'@fortawesome/free-solid-svg-icons';
import subscription from '../../assets/youtube-subscription.png';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar__item">
        <div className="sidebar__item-icon-wrapper">
          <FontAwesomeIcon className="sidebar__item-icon" icon={faHome} />
        </div>
        <span className="sidebar__item-text">홈</span>
      </button>
      <button className="sidebar__item">
        <div className="sidebar__item-icon-wrapper">
          <FontAwesomeIcon className="sidebar__item-icon" icon={faFire} />
        </div>
        <span className="sidebar__item-text">인기</span>
      </button>
      <button className="sidebar__item">
        <div className="sidebar__item-icon-wrapper">
          <img className="sidebar__item-img" src={subscription} alt="구독"/>
        </div>
        <span className="sidebar__item-text">구독</span>
      </button>
    </div>
  );
};

export default Sidebar;