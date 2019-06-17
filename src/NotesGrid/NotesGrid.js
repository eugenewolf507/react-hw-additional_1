import React from "react";
import Note from "../Note/Note";
// import styles from "./NotesGrid.module.css";

const NotesGrid = ({ items }) => (
  <div className=".grid">
    {items.map(item => (
      <Note text={item.noteText} color={item.noteBGColor} />
    ))}
  </div>
);

export default NotesGrid;
