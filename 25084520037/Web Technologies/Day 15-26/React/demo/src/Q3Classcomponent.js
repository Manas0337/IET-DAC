import React, { Component } from "react";

class TextTransformer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  toUpperCase(e){
    console.log(e.target);
    
    let input = (document.getElementById("input"))
    let p1 = (document.getElementById("p1"))
    p1.innerHTML = input.target.value.toUpperCase();
  };

  toLowerCase = () => {
    console.log(this.state.text.toLowerCase());
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <input
          type="text"
          id="input"
          placeholder="Enter text here"
        />
        <br /><br />
        <button onClick={this.toUpperCase}>UPPER CASE</button>
        <button onClick={this.toLowerCase} style={{ marginLeft: '10px' }}>
          lower case
        </button>
        <p id="p1"></p>

      </div>
    );
  }
}

export default TextTransformer