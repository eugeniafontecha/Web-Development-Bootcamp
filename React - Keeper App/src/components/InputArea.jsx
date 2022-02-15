import React, { useState } from "react";

function InputArea(props) {
    const [newNote, setNewNote] = useState({title:"", content: ""});
    
    function handleChange(event) {
        const {name, value} = event.target;

        setNewNote( prevValues => {
            const theNewNote = {...prevValues, [name]:value};
            return theNewNote;
        });
    }

    function handleClick(event) {
        props.onClick(newNote);
        setNewNote({title:"", content: ""});

        event.preventDefault();
    }
    

    return (
        <div>
            <form onSubmit={handleClick}>
                <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title}></input>
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={newNote.content}></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default InputArea