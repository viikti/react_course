import CounterView from "../CounterView";

const Layout = ({
  counterValue,
  handleIncrement,
  handleReset,
  handleDecrement,
}) => {
  return (
    <div>
      <CounterView
        handleReset={handleReset}
        counterValue={counterValue}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default Layout;
