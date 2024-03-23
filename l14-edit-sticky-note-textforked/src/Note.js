import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const updateValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updateValue);
  };
  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };
  return (
    <li className="note">
      <input
        type="text"
        placeholder="Title"
        className="note__title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        placeholder="Description..."
        className="note__description"
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete">X</span>
    </li>
  );
};

export default Note;