import React, {useState} from 'react';
import Table from './Table';
import AddBookForm from './AddBookForm'
import EditBookForm from './EditBookForm'

const App = () => {
  const booksData = [
    { id: 1,
      name: 'Đánh thức con người phi thường trong bạn'
    },
    { id: 2,
      name: 'Suy nghĩ vẫn vơ của kẻ nhàn rỗi'
    },
    { id: 3,
      name: 'Bắt trẻ đồng xanh'
    },
  ]

  const initialDataState = { id: null, name: ''}

  const [books, setBooks] = useState(booksData);
  const [bookDataState, setBookDataState] = useState(initialDataState);
  const [editBook, setEditBook] = useState(false);

  const addBook = book => {
    book.id = books.length + 1 
    setBooks([...books, book ])
  }

  const deleteBook = id => {
    setEditBook(false)
    setBooks(books.filter(book => book.id !== id))
  }

  const updateBook = (id, updatedBook) => {
    setEditBook(false)
    setBooks(books.map(book => (book.id === id ? updatedBook : book)))
  }

  const edit = book => {
    setEditBook(true)
    setBookDataState({id: book.id, name: book.name})
}
  return (
  <div className="container">
  <div className="flex-row">
    <div className="flex-large">
      {editBook ? (
        <div>
          <p>Edit book</p>
          <EditBookForm editBook={editBook} 
          setEditBook={setEditBook} 
          bookDataState={bookDataState}
          updateBook={updateBook} />
          </div>
      ) : (
        <div>
          <p>Add new book</p>
          <AddBookForm addBook={addBook} />
        </div>
      )}
      <div>
        {/* <p>View book</p> */}
      <Table books={books} edit={edit} deleteBook={deleteBook} />
      </div>
    </div>
  </div>
</div>
)
  
}
export default App;
