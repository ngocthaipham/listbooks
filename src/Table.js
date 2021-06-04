import React from 'react';

const Table = props => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {props.books.length > 0 ? (
              props.books.map(book =>(
                <tr key={book.id}>
                    <td>{book.name}</td>
          <td>
            <button 
            onClick={() => {
                props.edit(book)
            }}
             className="edit-button">Edit</button>
            <button 
            onClick={() =>
                props.deleteBook(book.id)
            }
            className="delete-button">Delete</button>
          </td>
        </tr>
              ))) : (
                  <tr>
                      <td colSpan={1}>No book</td>
                  </tr>
              )}
      </tbody>
    </table>
  )
  export default Table ;