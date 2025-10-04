import React, { Component } from "react";

class TextTransformer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      transformedText: ''
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  toUpperCase = () => {
    this.setState({ transformedText: this.state.text.toUpperCase() });
  };

  toLowerCase = () => {
    this.setState({ transformedText: this.state.text.toLowerCase() });
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <input
          type="text"
          id="input"
          placeholder="Enter text here"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <br /><br />
        <button onClick={this.toUpperCase}>UPPER CASE</button>
        <button onClick={this.toLowerCase} style={{ marginLeft: '10px' }}>
          lower case
        </button>
        <p id="p1">{this.state.transformedText}</p>
      </div>
    );
  }
}

export default TextTransformer;
