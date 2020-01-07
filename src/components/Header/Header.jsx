import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/youtube-logo.png';
import LoginForm from '../LoginForm/LoginForm';

const Header = () => (
  <header>
    <nav className="nav">
      <button className="nav__menu" type="button">
        <FontAwesomeIcon className="nav__menu-icon" icon={faBars} />
      </button>
      <button className="nav__logo" type="button">
        <img className="nav__logo-img" src={logo} alt="로고" />
      </button>
      <div className="nav__search-bar">
        <input className="nav__search-input" placeholder="검색" type="text" />
        <button className="nav__search-button" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <button className="nav__notification" type="button">
        <FontAwesomeIcon className="nav__notification-icon" icon={faBell} />
      </button>
      <button className="nav__profile" type="button" aria-label="프로필버튼">
        <LoginForm />
      </button>
    </nav>
  </header>
);

export default Header;
