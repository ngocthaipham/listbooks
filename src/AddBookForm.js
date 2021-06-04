import React, {useState} from 'react';

const AddBookForm = props => {
    const initialDataState = { id: null, name:""}
    const [book, setBook] = useState(initialDataState)
    const handleInput = event => {
        const {name, value} = event.target
        setBook({...book, [name]: value})
    }
    return (
        <form 
            onSubmit={event  => {
                event.preventDefault()
                if (!book.name) 
                return
                props.addBook(book)
                setBook(initialDataState)
            }
        }
        >
            <label>Name</label>
            <input type="text" name="name" value={book.name} onChange={handleInput} />
            <button>Add new book</button>
        </form>
    )
}

export default AddBookForm ;