import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';

export default () => {
    const [name, setName] = useState("");
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res=>console.log(res))
            .then(history.push("/"))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>Favorite Authors</h1>
                <Link to="/">Home</Link>
                <p>Add a new author:</p>
                <p>
                    <label>Name: </label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </p>
                <button type="submit">Submit</button>
            </form>
            <button onClick={(e) => history.push("/")}>Cancel</button>
        </div>
    )
}

