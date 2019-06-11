import React, { Component, Fragment } from "react";
import NoteEditor from "../NoteEditor/NoteEditor";

class NotesApp extends Component {
  state = { currentNodeText: "", currentNodeBGColor: "" };

  render() {
    return (
      <Fragment>
        <NoteEditor />
      </Fragment>
    );
  }
}

export default NotesApp;
