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
    },
    {
      id: nanoid(),
      title: 'Second Note',
      text: 'This is my second note!',
      date: '5/17/2024',
    },
    {
      id: nanoid(),
      title: 'Third Note',
      text: 'This is my third note!',
      date: '6/17/2024',
    },
    {
      id: nanoid(),
      title: 'Fourth Note',
      text: 'This is my new note!',
      date: '7/17/2024',
    }
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = ({ title, text }) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title || 'Untitled',
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  // const searchNotes = (searchText) => {
  //   const filteredNotes = notes.filter((note) =>
  //     note.title.toLowerCase().includes(searchText.toLowerCase()) ||
  //     note.text.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   setNotes(filteredNotes);
  // };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText)||note.title.toLowerCase().includes(searchText.toLowerCase()))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
    
  );
};

export default App;
