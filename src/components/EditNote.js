// EditNote.js
import React, { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';

const EditNote = ({ id, initialTitle, initialText, handleEditNote, handleDeleteNote }) => {
  const [title, setTitle] = useState(initialTitle);
  const [text, setText] = useState(initialText);
  const [image, setImage] = useState(null); // State to store the uploaded image

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSaveClick = () => {
    if (title.trim() === '' && text.trim() === '') {
      handleDeleteNote(id);
    } else {
      handleEditNote(id, title, text, image); // Pass the image to the handleEditNote function
    }
  };

  const handleDeleteImage = () => {
    setImage(null); // Reset the image state to delete the uploaded image
  };

  return (
    <div className="note edit">
      <div className="note-inputs">
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
        />
        <textarea
          rows="8"
          cols="10"
          value={text}
          onChange={handleChangeText}
        ></textarea>
        {image && (
          <div className="uploaded-image">
            <img src={URL.createObjectURL(image)} alt="Uploaded" />
            <span className="delete-image" onClick={handleDeleteImage}>
              X
            </span>
          </div>
        )}
        <label htmlFor="image-upload" className="image-upload-label">
          <BiImageAdd className="image-add-icon" />
          Add Image
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>
      <div className="note-footer">
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditNote;
