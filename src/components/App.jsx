import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [note, setNote] = useState([]);

    function addNote(noteInfo) {
        setNote((prevValue) => {
            return [...prevValue, noteInfo]
        })
    }
    function deleteNote(id) {
        setNote((prevNotes) => {
            return prevNotes.filter((item, index) => {
                return index !== id
            })
        })
    }
    

    return (
        <div>
            <Heading />
            <Footer />
            <CreateArea addOn={addNote} />
            <div>
              {note.map((item, index) => {
                  return <Note key={index} id={index} title={item.title} content={item.content} deleteNote={deleteNote}/>
            })}
            </div>
        </div>
    )
}

export default App;