import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
import EditNote from './EditNote';

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
  editingNoteId,
  setEditingNoteId,
  handlePinNote,
}) => {
  return (
    <div className="notes-list">
      <div className="grid-container">
        {notes.map((note) =>
          note.id === editingNoteId ? (
            <EditNote
              key={note.id}
              id={note.id}
              initialTitle={note.title}
              initialText={note.text}
              handleEditNote={handleEditNote}
              handleDeleteNote={handleDeleteNote}
            />
          ) : (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
              setEditingNoteId={setEditingNoteId}
              handlePinNote={handlePinNote}
              isPinned={note.pinned}
            />
          )
        )}
      </div>
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
