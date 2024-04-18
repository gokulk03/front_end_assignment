import React from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { TiPin } from 'react-icons/ti';
import { MdEdit } from 'react-icons/md';
import { RiUnpinFill } from 'react-icons/ri';

const Note = ({
  id,
  title,
  text,
  date,
  handleDeleteNote,
  setEditingNoteId,
  handlePinNote,
  isPinned,
}) => {
  const handleEditClick = () => {
    setEditingNoteId(id);
  };

  const handlePinClick = () => {
    handlePinNote(id);
  };

  return (
    <div className={`note ${isPinned ? 'pinned' : ''}`}>
      <h3>{title}</h3>
      <span>{text}</span>
      <div className="note-footer">
        <div>
          {isPinned ? (
            <RiUnpinFill
              onClick={handlePinClick}
              className="pin-icon"
              size="1.3em"
            />
          ) : (
            <TiPin onClick={handlePinClick} className="pin-icon" size="1.3em" />
          )}
          <MdEdit onClick={handleEditClick} className="edit-icon" size="1.3em" />
          <FaTrashCan
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
        <small>{date}</small>
      </div>
    </div>
  );
};

export default Note;
