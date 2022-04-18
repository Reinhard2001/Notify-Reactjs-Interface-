import React, { useState } from "react";

function CreateArea(props) {
    const [text, setText] = useState([{
        title: '',
        content:''
    }]);

    function handleChange(event) {
        const { name, value } = event.target;

        setText((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    const onClick = (event) => {
                        props.addOn(text)
                        setText({
                          title: '',
                          content:''
                        })
                        event.preventDefault()
                    }
    return (
        <div>
            <form onChange={handleChange}>
               <input value={text.title} type="text" name="title" id="1" placeholder="Title"/>
                <textarea value={text.content} type="text" name="content" id="1" placeholder="Content" rows="3" />
                <button onClick={onClick} >
                    <div className="addIcon">
                        +
                    </div>
                </button>
            </form>
        </div>
    )
}

export default CreateArea;