import React from "react";

const Note = ({ text, color }) => (
  <div className="grid-item" style={{ backgroundColor: color }}>
    {text}
  </div>
);

export default Note;
