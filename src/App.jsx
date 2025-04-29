import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './App.css';
import { useState } from 'react';


function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook=(title)=>{
    const updatedBooks=[...books, {id: Math.round(Math.random()*9999) , title}];
    setBooks(updatedBooks);
    console.log(books.length);
    console.log(updatedBooks);

  };
  const deleteBookById=(id)=>{
    const updatedBooks=books.filter((book)=>{
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }; // Update the title with the new value
      }
      return book;
    });
    setBooks(updatedBooks);
  };

 
  return (
    <div className="App"  >

    <BookCreate onCreate={handleCreateBook}/>
    <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
    
    </div>
  )
}

export default App
