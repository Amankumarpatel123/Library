import React from 'react'
import { useState } from 'react';
const BookEdit = ({book, onSubmit}) => {


  const [title, setTitle] = useState(book.title);


  const handleChange = (event) => {
    setTitle(event.target.value);
   
    console.log(book.title);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title); // Ensure the updated title is passed
  };
    

  return (
    <form className='book-edit'onSubmit={handleSubmit}>
      <label>Title</label>
      <input className='input-update' value={title} type="text" placeholder='Enter new title' onChange={handleChange} />
      <button className='save'>Save</button>
    </form>
  )
}

export default BookEdit