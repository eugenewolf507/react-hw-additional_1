import React, { Component } from "react";
import NoteEditor from "../NoteEditor/NoteEditor";
import styles from "./NotesApp.module.css";
import NotesGrid from "../NotesGrid/NotesGrid";
import Masonry from "masonry-layout";

const noteBGColorList = {
  RED: "#ee9186",
  ORANGE: "#f7d18f",
  YELLOW: "#fffea1",
  GREY: "#d0d7db",
  BLUE: "#96d6f9",
  CYAN: "#bdfbeb",
  GREEN: "#d6fba0"
};

const INITIAL_STATE = {
  noteText: "",
  noteBGColor: "",
  notes: []
};

class NotesApp extends Component {
  state = {
    ...INITIAL_STATE
  };

  addToLocalStorage = () => {
    const { noteText, noteBGColor, notes } = this.state;
    const newNote = {
      noteText,
      noteBGColor
    };
    if (notes === null) {
      this.setState({ notes: [newNote] });
    } else {
      this.setState(prevState => ({ notes: [...prevState.notes, newNote] }));
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.addToLocalStorage();
  };

  componentDidMount() {
    this.setState({
      notes: JSON.parse(localStorage.getItem("notes"))
    });
  }

  componentDidUpdate() {
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
    const elem = document.querySelector(".grid");
    console.log("elem", elem);
    const msnry = new Masonry(elem, {
      itemSelector: ".grid-item",
      columnWidth: 50
    });

    // msnry.layout();
  }

  render() {
    const { noteBGColor, notes } = this.state;
    return (
      <div className={styles.container}>
        <h1>NotesApp</h1>
        <NoteEditor
          noteBGColorList={noteBGColorList}
          noteBGColorState={noteBGColor}
          submit={this.handleSubmit}
          changeInput={this.handleChange}
        />
        {notes !== null && <NotesGrid items={notes} />}
      </div>
    );
  }
}

export default NotesApp;
