import React from "react";
import Header from "./Header";
import NotesList from "./NotesList";

const App = () => (
  <div>
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside>
        <button className="add-new">+ New Note</button>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
        />
      </aside>
    </header>
    <ul class="notes-list">
      <li className="note ">
        <input className="note__title" type="text" placeholder="Title" />
        <textarea className="note__description" placeholder="Description..." />
        <span className="note__delete">X</span>
      </li>
      <li className="note">
        <input className="note__title" type="text" placeholder="Title" />
        <textarea className="note__description" placeholder="Description..." />
        <span className="note__delete">X</span>
      </li>
      <li className="note">
        <input className="note__title" type="text" placeholder="Title" />
        <textarea className="note__description" placeholder="Description..." />
        <span className="note__delete">X</span>
      </li>
    </ul>
  </div>
);

export default App;
