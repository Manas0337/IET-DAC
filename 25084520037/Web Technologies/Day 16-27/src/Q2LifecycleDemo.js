import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("1️⃣ constructor()");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2️⃣ getDerivedStateFromProps()");
    return null;
  }

  componentDidMount() {
    console.log("3️⃣ componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("4️⃣ shouldComponentUpdate()");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("5️⃣ getSnapshotBeforeUpdate()");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("6️⃣ componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("7️⃣ componentWillUnmount()");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("🔄 render()");
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
