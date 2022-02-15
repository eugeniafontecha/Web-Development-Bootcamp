import React, { useState } from "react";
import Header from "./Header";
import InputArea from "./InputArea";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes";


function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes( prevNotes => {           
            return [...prevNotes, newNote];
        });
        
    }


    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return(
        <div>
            <Header />
            <InputArea onClick={addNote}/>
            {notes.map((note,index) => (
                <Note key={index} id={index} onClick={deleteNote} title={note.title} content={note.content} />
            ))}
            <Footer />
        </div>
    );
}

export default App;