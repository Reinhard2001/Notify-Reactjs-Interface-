import React from "react";
import { MdDelete } from "react-icons/md";

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button
               onClick={() => {
               props.deleteNote(props.id);
                }}
                className="delete"
            ><MdDelete size="30px"/></button> 
        </div>
    )
}

export default Note;