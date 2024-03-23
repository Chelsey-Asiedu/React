import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true,
      },
    ],
    searchText: "",
  };
  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };
    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };
  onType = (editmeId, updatedkey, updatedValue) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== editmeId) {
        return note;
      } else {
        if (updatedkey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });

    this.setState({ notes: updatedNotes });
  };

  render() {
    return (
      <div>
        <Header addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList onType={this.onType}notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
