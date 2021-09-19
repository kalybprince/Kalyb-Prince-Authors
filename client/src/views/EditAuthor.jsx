import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import axios from 'axios';

export default () => {
    const [name, setName] = useState("");
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => setName(res.data))
            .catch(err => console.error(err));
    }, []);

    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(res => console.log(res))
            .then(history.push("/"))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <form onSubmit={updatePerson}>
                <h1>Favorite Authors</h1>
                <Link to="/">Home</Link>
                <p>Edit this author:</p>
                <p>
                    <label>Name: </label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name.name}/>
                </p>
                <button type="submit">Submit</button>
            </form>
            <button onClick={(e) => history.push("/")}>Cancel</button>
        </div>
    )
}

