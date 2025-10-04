import React, { useState } from "react";

const TextTransformer = () => {
  const [text, setText] = useState("");
  const [operation, setOperation] = useState("");

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getTransformedText = () => {
    switch (operation) {
      case "uppercase":
        return text.toUpperCase();
      case "lowercase":
        return text.toLowerCase();
      case "titlecase":
        return toTitleCase(text);
      default:
        return text;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Text Transformer</h2>
      <input
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "300px", padding: "5px" }}
      />

      <div style={{ marginTop: "15px" }}>
        <label>
          <input
            type="radio"
            name="operation"
            value="uppercase"
            checked={operation === "uppercase"}
            onChange={(e) => setOperation(e.target.value)}
          />
          Uppercase
        </label>

        <label style={{ marginLeft: "15px" }}>
          <input
            type="radio"
            name="operation"
            value="lowercase"
            checked={operation === "lowercase"}
            onChange={(e) => setOperation(e.target.value)}
          />
          Lowercase
        </label>

        <label style={{ marginLeft: "15px" }}>
          <input
            type="radio"
            name="operation"
            value="titlecase"
            checked={operation === "titlecase"}
            onChange={(e) => setOperation(e.target.value)}
          />
          Title Case
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Output:</h3>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          {getTransformedText()}
        </p>
      </div>
    </div>
  );
};

export default TextTransformer;

