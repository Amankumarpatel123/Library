import React, { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim()) {
      onCreate(title);
      setTitle('');
    }
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <input
          className="input-create"
          placeholder="Enter the title"
          type="text"
          value={title}
          onChange={handleChange}
          maxLength={50} 
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookCreate;
