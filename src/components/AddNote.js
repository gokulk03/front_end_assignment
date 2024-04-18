import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const characterLimit = 200;

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (text.trim().length > 0) {
      handleAddNote({
        title: title.trim() || 'Untitled',
        text: text.trim()
      });
      setTitle('');
      setText('');
    }
  };

  return (
    <div className="note new">
      <div className="note-inputs">
        <input
          type="text"
          placeholder="Title (optional)"
          value={title}
          onChange={handleChangeTitle}
        />
        <textarea
          rows="8"
          cols="10"
          placeholder="Type to add a note..."
          value={text}
          onChange={handleChangeText}
        ></textarea>
      </div>
      <div className="note-footer">
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
  
};

export default AddNote;
