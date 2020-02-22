import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import routes from "../../routes";

const Header = () => (
  <header className={styles.headerMain}>
    <h1 className={styles.logo}>
      <Link to={routes.ONE_DAY_PAGE}>Logo</Link>
    </h1>

    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <NavLink
            exact
            to={routes.ONE_DAY_PAGE}
            activeClassName={styles.activeLink}
          >
            One day
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.FIVE_DAY_PAGE}
            activeClassName={styles.activeLink}
          >
            Five days
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
