import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = props.notes.filter(keepSearchMatches);
  const renderNotes = (note) => (
    <Note onType={props.onType} note={note} key={note.id} />
  );
  const notesElelments = searchMatches.map(renderNotes);
  return <ul className="notes-list">{notesElelments}</ul>;
};

export default NotesList;
