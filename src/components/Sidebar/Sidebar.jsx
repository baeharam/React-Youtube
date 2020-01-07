import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFire,
  faFileVideo,
  faHistory,
  faClock,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import subscription from '../../assets/youtube-subscription.png';
import './Sidebar.scss';

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar__item-wrapper">
      <button className="sidebar__item" type="button">
        <div className="sidebar__item-icon-wrapper">
          <FontAwesomeIcon className="sidebar__item-icon" icon={faHome} />
        </div>
        <span className="sidebar__item-text">홈</span>
      </button>
      <button className="sidebar__item" type="button">
        <div className="sidebar__item-icon-wrapper">
          <FontAwesomeIcon className="sidebar__item-icon" icon={faFire} />
        </div>
        <span className="sidebar__item-text">인기</span>
      </button>
      <button className="sidebar__item" type="button">
        <div className="sidebar__item-icon-wrapper">
          <img className="sidebar__item-img" src={subscription} alt="구독" />
        </div>
        <span className="sidebar__item-text">구독</span>
      </button>
    </div>
    <div className="sidebar__line" />
    <div className="sidebar__item-wrapper">
      <button className="sidebar__item" type="button">
        <div className="sidebar__item-icon-wrapper">
          <FontAwesomeIcon className="sidebar__item-icon" icon={faFileVideo} />
        </div>
        <span className="sidebar__item-text">보관함</span>
      </button>
      <button className="sidebar__item" type="button">
        <div className="sidebar__item-icon-wrapper">
          <FontAwesomeIcon className="sidebar__item-icon" icon={faHistory} />
        </div>
        <span className="sidebar__item-text">최근 본 동영상</span>
      </button>
      <button className="sidebar__item" type="button">
        <div className="sidebar__item-icon-wrapper">
          <FontAwesomeIcon className="sidebar__item-icon" icon={faClock} />
        </div>
        <span className="sidebar__item-text">나중에 볼 동영상</span>
      </button>
      <button className="sidebar__item" type="button">
        <div className="sidebar__item-icon-wrapper">
          <FontAwesomeIcon className="sidebar__item-icon" icon={faThumbsUp} />
        </div>
        <span className="sidebar__item-text">좋아요 표시한 동영상</span>
      </button>
    </div>
    <div className="sidebar__line" />
  </div>
);

export default Sidebar;
