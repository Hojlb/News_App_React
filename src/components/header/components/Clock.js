import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render () {
    const date = this.state.date.toLocaleDateString();
    const time = this.state.date.toLocaleTimeString();

    return (
      <span>{`${date} /  ${time}`
      }</span>
    );
  }
}
