import { Component } from "react";
import CounterView from "../../../commonComponents/CounterView";
import Layout from "commonComponents/Layout";

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  componentDidUpdate(_, prevState) {
    const currentCountValue = this.state.countValue;
    if (prevState.countValue !== currentCountValue) {
      this.setState({ isEven: currentCountValue % 2 === 0 ? true : false });
    }
  }

  handleIncrement = () => {
    this.setState((state) => ({
      countValue: state.countValue + 1,
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
