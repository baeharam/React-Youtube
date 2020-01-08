import React, { useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faBell,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import GoogleLogin from 'react-google-login';
import logo from '../../assets/youtube-logo.png';
import { GOOGLE_CLIENT_ID } from '../../constants';
import LoginForm from '../LoginForm/LoginForm';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
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
        {!isLoggedIn ? (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            onSuccess={onLoginSuccess}
            render={renderProps => (
              <button
                className="nav__login"
                type="button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FontAwesomeIcon
                  className="nav__login-icon"
                  icon={faUserCircle}
                />
                로그인
              </button>
            )}
          />
        ) : (
          <button
            className="nav__profile"
            type="button"
            aria-label="프로필버튼"
          >
            <LoginForm />
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
