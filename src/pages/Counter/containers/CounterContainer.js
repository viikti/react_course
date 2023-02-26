import { Component } from "react";
import CounterView from "../components/CounterView";
import Layout from "../components/Layout";

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  handleIncrement = () => {
    this.setState((state) => {
      const incrementValue = state.countValue + 1;
      return {
        countValue: incrementValue,
        isEven: !this.state.isEven,
      };
    });
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => {
        const decrementValue = state.countValue - 1;
        return {
          countValue: decrementValue,
          isEven: !this.state.isEven,
        };
      });
    }
  };

  render() {
    return (
      <CounterView
        counterValue={this.state.countValue}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
        handleDecrement={this.handleDecrement}
        isEven={this.state.isEven}
      />
    );
  }
}

export default CounterContainer;
