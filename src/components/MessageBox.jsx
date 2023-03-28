import React, { useState } from 'react';

function MessageBox(props) {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    props.onDelete();
  };

  const handleSave = () => {
    props.onSave(title, content);
    setIsEditing(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <div>
        <input value={title} onChange={handleTitleChange} />
        <textarea value={content} onChange={handleContentChange} />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
}

export default MessageBox;
