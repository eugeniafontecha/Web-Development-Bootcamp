import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function InputArea(props) {
    const [newNote, setNewNote] = useState({title:"", content: ""});
    const [isExpanded, setExpanded] = useState(false);
    
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
        setExpanded(false);

        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }
    

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input 
                        name="title"
                        onChange={handleChange} 
                        placeholder="Title"
                        value={newNote.title}>
                    </input>
                )}
                <textarea 
                    onClick={expand} 
                    onChange={handleChange} 
                    name="content" 
                    placeholder="Take a note..." 
                    value={newNote.content} 
                    rows={isExpanded ? "3" : "1"}>

                </textarea>
                <Zoom in={isExpanded}> 
                    <Fab onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </Zoom> 
            </form>
        </div>
    )

}

export default InputArea