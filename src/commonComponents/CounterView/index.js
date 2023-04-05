import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  id,
  counterValue,
  handleIncrement,
  handleReset,
  handleDecrement,
  handleCounterRemove,
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
        <button
          className={styles.controlButton}
          onClick={() => handleDecrement(id)}
        >
          -
        </button>
        <button
          className={styles.controlButton}
          onClick={() => handleReset(id)}
        >
          Reset
        </button>
        <button
          className={styles.controlButton}
          onClick={() => handleIncrement(id)}
        >
          +
        </button>
      </div>
      {handleCounterRemove && (
        <button
          style={{ background: `red` }}
          onClick={() => handleCounterRemove(id)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

CounterView.propTypes = {
  id: PropTypes.string,
  counterValue: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleReset: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleRemove: PropTypes.func,
  isEven: PropTypes.bool,
  evenOrOddNumber: PropTypes.string,
};
export default CounterView;
