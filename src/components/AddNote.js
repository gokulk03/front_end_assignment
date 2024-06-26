// AddNote.js
import React, { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';

const AddNote = ({ handleAddNote }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
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
    if (text.trim().length > 0 || image) {
      handleAddNote({
        title: title.trim() || 'Untitled',
        text: text.trim(),
        image: image, // Pass the image to the handleAddNote function
      });
      setTitle('');
      setText('');
      setImage(null); // Reset the image state after saving
    }
  };

  const handleDeleteImage = () => {
    setImage(null); // Reset the image state to delete the uploaded image
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

export default AddNote;
