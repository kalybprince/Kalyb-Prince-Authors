import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import axios from 'axios'
    
const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const history = useHistory();
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
            })
            .catch(err => console.error(err));
    },[authors]);

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                history.push("/")
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
                {authors.map( (author, i) =>
                    <tr>
                        <td key={i}>{author.name}</td>
                        <td>
                            <button onClick={() => history.push(`/edit/${author._id}`)}>Edit</button>
                            <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                        </td>
                    </tr>
                )}
            </table>
        </div>
    )
}
    
export default Main;