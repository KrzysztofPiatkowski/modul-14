import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
            <Link to='/' className={styles.logo}>
              <FontAwesomeIcon icon={faTasks} />
            </Link>
            <ul className={styles.navLinks}>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/">Home</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/favorite">Favorite</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/about">About</NavLink></li>
            </ul>
          </div>
        </Container>
      </nav>
    );
  };

  export default NavBar;