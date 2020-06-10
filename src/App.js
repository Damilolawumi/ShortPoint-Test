import React, { useState } from 'react';
import Form from './Components/Form';

import './App.css';
import Notes from './Components/Notes';

function App() {
  const [notesList, setNoteContent] = useState([
    {color:'red', text:'Lorem Ipsumssds d shds ds dsd', id:2, date:3232324}
  ]);

  // created a function to push a newNote into notesList
  const addNote = (newNote) => {
    let notes = [...notesList];
    notes.push(newNote)
    setNoteContent(notes)
  }

  const deleteNote = (id) => {
    let filteredNotes = notesList.filter(note => {
      return note.id !== id
    })
    setNoteContent(filteredNotes)
  }

  const editNote = (id, updatedNote) => {
      let noteIndex = notesList.findIndex(note => note.id === id);

      let notes = [...notesList];
      notes[noteIndex] = updatedNote;

      setNoteContent(notes)
  }
  return (
    <div className="App">
      {/* passed addnote and noteList as props to the form component and Notes component */}
      <Form add={addNote} />
      <Notes notes={notesList} delete={deleteNote} editNote={editNote} />
    </div>
  );
}

export default App;
