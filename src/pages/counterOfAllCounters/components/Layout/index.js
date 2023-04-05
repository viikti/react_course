import PropTypes, { checkPropTypes } from "prop-types";
import CounterOfAllCounters from "../../containers/CounterOfAllCounters";

import CounterView from "commonComponents/CounterView";
import styles from "./styles.module.scss";

const Layout = ({
  counters,
  handleCounterCreate,
  handleReset,
  handleCounterRemove,
  handleCounterIncrement,
  handleCounterDecrement,
  handleCounterReset,
  handleRemoveAllCounters,
  totalSum,
  average,
}) => {
  return (
    <div>
      <h1>Counter Of All Counters</h1>
      <div className={styles.info}>
        <p>Total Sum:{totalSum}</p>
        <p>Average:{average}</p>
        <p>Counters Amount:{counters.length}</p>
      </div>
      <div>
        <button onClick={handleCounterCreate}>Create counter</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className={styles.wrapper}>
        {counters.map(({ id, countValue }) => (
          <CounterView
            id={id}
            key={id}
            counterValue={countValue}
            handleIncrement={handleCounterIncrement}
            handleReset={handleCounterReset}
            handleDecrement={handleCounterDecrement}
            handleCounterRemove={handleCounterRemove}
          />
        ))}
      </div>
    </div>
  );
};
Layout.prototype = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      countValue: PropTypes.number,
    }).isRequired
  ).isRequired,
  handleCounterCreate: PropTypes.func,
  handleReset: PropTypes.func,
  handleCounterRemove: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleRemoveAllCounters: PropTypes.func,
  totalSum: PropTypes.func,
  average: PropTypes.func,
};

export default Layout;
