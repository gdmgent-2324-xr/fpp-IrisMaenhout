import React, { Component, ReactNode } from "react";

interface ChangingProgressProviderProps {
  interval?: number;
  values: number[];
  children: (value: number) => ReactNode;
}

interface ChangingProgressProviderState {
  valuesIndex: number;
}

class ChangingProgressProvider extends Component<
  ChangingProgressProviderProps,
  ChangingProgressProviderState
> {
  static defaultProps: Partial<ChangingProgressProviderProps> = {
    interval: 1000,
  };

  state: ChangingProgressProviderState = {
    valuesIndex: 0,
  };

  intervalId: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        valuesIndex: (prevState.valuesIndex + 1) % this.props.values.length,
      }));
    }, this.props.interval);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;
