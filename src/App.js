// App.js
import React, { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import { nanoid } from 'nanoid';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: 'First Note',
      text: 'This is my first note!',
      date: '4/17/2024',
      pinned: false,
    },
    // Add more initial notes as needed
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = ({ title, text }) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title || 'Untitled',
      text: text,
      date: date.toLocaleDateString(),
      pinned: false,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleEditNote = (id, title, text) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title: title,
          text: text,
        };
      }
      return note;
    });

    setNotes(updatedNotes);
    setEditingNoteId(null); // Reset editing mode
  };

  const handlePinNote = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          pinned: !note.pinned,
        };
      }
      return note;
    });
  
    const pinnedNote = updatedNotes.find((note) => note.id === id);
    const unpinnedNotes = updatedNotes.filter((note) => note.id !== id);
  
    if (pinnedNote.pinned) {
      setNotes([pinnedNote, ...unpinnedNotes]);
    } else {
      setNotes([...unpinnedNotes, pinnedNote]);
    }
  };
  

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter(
            (note) =>
              note.text.toLowerCase().includes(searchText) ||
              note.title.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={handleEditNote}
          editingNoteId={editingNoteId}
          setEditingNoteId={setEditingNoteId}
          handlePinNote={handlePinNote}
        />
      </div>
    </div>
  );
};

export default App;
