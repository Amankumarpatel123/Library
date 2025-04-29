import React from 'react';
import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit}) => {
const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
    
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  
  }
  const handleSubmit = (id,newTitle) => {
    setShowEdit(false);
    onEdit(book.id, newTitle);
  };
  let content= <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }


  return (
    <div className='book-show' >
    <img className='book-image' src={`https://picsum.photos/seed/${book.title}/300/200`} alt="Book" />
      <div>{content}</div>
      <div className='actions'>
        <button className='delete' onClick={handleDelete}>
          ❌
        </button>
        <button className='edit' onClick={handleEdit}>
          📝
        </button>
      </div>
    </div>
  )

}
export default BookShow;