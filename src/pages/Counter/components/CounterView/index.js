import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  counterValue,
  handleIncrement,
  handleReset,
  handleDecrement,
  isEven,
}) => {
  const evenOrOddNumber = isEven ? ` even number !` : ` odd number !`;
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: isEven ? "#d56a88" : "#687c8c" }}
    >
      <div className={styles.display}>{counterValue}</div>

      <div className={styles.infoSection}>Entered {evenOrOddNumber}</div>

      <div className={styles.controlButtons}>
        <button className={styles.controlButton} onClick={handleDecrement}>
          -
        </button>
        <button className={styles.controlButton} onClick={handleReset}>
          Reset
        </button>
        <button className={styles.controlButton} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

CounterView.propTypes = {
  counterValue: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleReset: PropTypes.func,
  handleDecrement: PropTypes.func,
  isEven: PropTypes.bool,
  evenOrOddNumber: PropTypes.string,
};
export default CounterView;
