import React from 'react';
import { FaTrashCan } from "react-icons/fa6";
import { TiPin } from "react-icons/ti";

const Note = ({ id, title, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <h3>{title}</h3> {/* Display the title */}
      <span>{text}</span>
      <div className="note-footer">
        <TiPin className='pin-icon' size='1.3em' />
        <small>{date}</small>
        <FaTrashCan
          onClick={() => handleDeleteNote(id)}
          className='delete-icon'
          size='1.3em'
        />
      </div>
    </div>
  );
};

export default Note;
