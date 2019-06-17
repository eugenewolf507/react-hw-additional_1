import React from "react";
import styles from "./NoteEditor.module.css";

const NoteEditor = ({
  noteBGColorState,
  noteBGColorList,
  submit,
  changeInput
}) => (
  <form className={styles.noteEditor} onSubmit={submit}>
    <textarea
      rows="10"
      className={styles.textArea}
      placeholder="Enter your note here..."
      name="noteText"
      onChange={changeInput}
    />
    <div>
      <input
        type="radio"
        name="noteBGColor"
        value={noteBGColorList.RED}
        onChange={changeInput}
        checked={noteBGColorState === noteBGColorList.RED}
      />
      <input
        type="radio"
        name="noteBGColor"
        value={noteBGColorList.ORANGE}
        onChange={changeInput}
        checked={noteBGColorState === noteBGColorList.ORANGE}
      />
      <input
        type="radio"
        name="noteBGColor"
        value={noteBGColorList.YELLOW}
        onChange={changeInput}
        checked={noteBGColorState === noteBGColorList.YELLOW}
      />
      <input
        type="radio"
        name="noteBGColor"
        value={noteBGColorList.GREY}
        onChange={changeInput}
        checked={noteBGColorState === noteBGColorList.GREY}
      />
      <input
        type="radio"
        name="noteBGColor"
        value={noteBGColorList.BLUE}
        onChange={changeInput}
        checked={noteBGColorState === noteBGColorList.BLUE}
      />
      <input
        type="radio"
        name="noteBGColor"
        value={noteBGColorList.CYAN}
        onChange={changeInput}
        checked={noteBGColorState === noteBGColorList.CYAN}
      />
      <input
        type="radio"
        name="noteBGColor"
        value={noteBGColorList.GREEN}
        onChange={changeInput}
        checked={noteBGColorState === noteBGColorList.GREEN}
      />
    </div>
    <input type="submit" value="Add" className={styles.addButton} />
  </form>
);

export default NoteEditor;
