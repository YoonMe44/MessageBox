import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css'

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Retrieve the notes from localStorage
        const storedNotes = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));

        // Update the state with the retrieved notes
        setNotes(storedNotes);
    }, []);

    function handleChange(event) {
        const {name, value} = event.target;
        setNewNote(prevNote => { return {...prevNote, [name]: value}});
    }

    function submitNote(event) {
        event.preventDefault();
        props.addNote(newNote);
        setNotes(prevNotes => [...prevNotes, newNote]);
        setNewNote({title: "", content: ""});

        // Store the new note in localStorage
        localStorage.setItem(new Date().getTime(), JSON.stringify(newNote));
    }

    function deleteNote(index) {
        // Remove the note from localStorage
        localStorage.removeItem(Object.keys(localStorage)[index]);

        // Update the state to remove the note from the browser
        setNotes(prevNotes => prevNotes.filter((note, i) => i !== index));
    }

    return (
        <div>
            <form className="create-note">
                <input onChange={handleChange} value={newNote.title} name="title" placeholder="Title" className='input_ttl'/> <br />
                <textarea onChange={handleChange} value={newNote.content} name="content" placeholder="Take a note..."/><br />
                <input onClick={submitNote} type="submit" value="Submit" className='submit_btn'/>
            </form>

            {/* Render the notes from localStorage */}
            {notes.map((note, index) => (
                 <div  key={index} className="message note">
                    <h4>{note.title}</h4>
                    <p>{note.content}</p>
                    <button onClick={() => deleteNote(index)}>
                        <DeleteIcon />    
                    </button>
                </div>
            ))}
        </div>
    );
}

export default CreateArea;
