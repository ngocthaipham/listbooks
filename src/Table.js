import React , {useState, useEffect} from 'react';

const Table = (props) => {
  const [booksList, setBooksList] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => {
        setBooksList(data);
      });
  },[])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {booksList.map(book =>(
                <tr key={book.id}>
                    <td>{book.name}</td>
          <td>
            <button 
            onClick={() => {
                props.edit(book)
            }}
             className="edit-button">Edit</button>
            <button 
            onClick={() => {
                props.deleteBook(book.id)
            }}
            className="delete-button">Delete</button>
          </td>
        </tr>
              ))}
      </tbody>
    </table>
  )}
  export default Table ;