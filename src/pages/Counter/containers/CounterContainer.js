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

  componentDidUpdate(_, prevState) {
    const evenOrOdd = this.state.countValue;
    if (prevState.countValue !== evenOrOdd) {
      this.setState({ isEven: evenOrOdd % 2 === 0 ? true : false });
    }
  }

  handleIncrement = () => {
    this.setState((state) => ({
      countValue: state.countValue + 2,
    }));
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => ({
        countValue: state.countValue - 1,
      }));
    }
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
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
