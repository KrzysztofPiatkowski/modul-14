import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.scss';
import React from 'react';

const NavBar = () => {
    return (
      <nav className={styles.nav}>
        <Container>
          <div className={styles.wrapper}>
            <a href='/' className={styles.logo}>
              <FontAwesomeIcon icon={faTasks} />
            </a>
            <ul className={styles.navLinks}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/favorite'>Favorite</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    );
  };

  export default NavBar;