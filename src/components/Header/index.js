import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/routeNames";
import { useLocation } from "react-router-dom";

import styles from "./styles.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.wrapper}>
      {Object.entries(ROUTE_NAMES).map(([routeName, path]) => {
        return (
          <Link
            key={path}
            to={path}
            className={styles.navlink}
            style={{ background: path === pathname ? "brown" : ` #7f828a ` }}
          >
            {routeName}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
