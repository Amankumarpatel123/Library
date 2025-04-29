import React from 'react';
import { useState } from 'react';
const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');


  const handlechange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };
  return (
    <div className='book-create'>
      <form onSubmit={handleSubmit}>
        <h3> Add a Book</h3>
        <input className='input-create'
          placeholder="Enter the title"
          type="text"
          value={title}
          onChange={handlechange}
        />
        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default BookCreate