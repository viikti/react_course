import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      {Object.entries(ROUTE_NAMES).map(([routeName, path]) => {
        return (
          <Link key={path} to={path} className={styles.navlink}>
            {routeName}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
