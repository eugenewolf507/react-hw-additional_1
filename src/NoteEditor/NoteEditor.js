import React from "react";
import styles from "./NoteEditor.module.css";

const NoteEditor = () => (
  <form className={styles.noteEditor}>
    <textarea
      rows="10"
      className={styles.textArea}
      placeholder="Enter your note here..."
    />
    <div>
      <input type="radio" name="currentNodeBGColor" />
      <input type="radio" name="currentNodeBGColor" />
      <input type="radio" name="currentNodeBGColor" />
      <input type="radio" name="currentNodeBGColor" />
    </div>
    <input type="submit" />
  </form>
);

export default NoteEditor;
