import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as CartIcon } from '../../assets/icons/shopping-cart.svg';
import LogOutModal from '../LogOutModal';

const Header = ({ isAuthentificated, avatar, username, openLogOutModal }) => (
  <header className="page-header header">
    <div className="container">
      <h1 className="h1 text-left">JS BAND STORE / Roman Bezpalyi</h1>
      {isAuthentificated && (
        <>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/cart">
                    <button type="button">
                      <CartIcon />
                    </button>
                  </Link>
                </li>
                <li>
                  <button type="button" onClick={openLogOutModal}>
                    Sign-Out
                  </button>
                </li>
              </ul>
            </nav>
            <img alt="avatar" src={avatar} />
            <p>{username}</p>
          </div>
          <LogOutModal />
        </>
      )}
    </div>
  </header>
);

Header.propTypes = {
  isAuthentificated: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  username: PropTypes.string,
  openLogOutModal: PropTypes.func.isRequired,
};

Header.defaultProps = {
  avatar: '',
  username: '',
};

export default Header;
