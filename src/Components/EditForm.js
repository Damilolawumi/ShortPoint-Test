import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function EditForm(props) {

    const [noteText, setNoteText] = useState(props.noteToEdit.text);
    const [noteColor, setNoteColor] = useState(props.noteToEdit.color);

    const onInputChange = (event) => {
        setNoteText(event.target.value)
    }

    const onColorChange = (event) => {
        setNoteColor(event.target.value)
    }


    return (
        <div className='modal'>
            <div className='form edit-form'>
                <p className='header'> Edit Note</p>
                <label className='label'>Note Text</label>
                <div>
                    <input className='input' type='text' placeholder='text' onChange={onInputChange} value={noteText} />
                </div>

                <label className='label'>Note Color</label>
                <div>
                    <select className='input' value={noteColor} onChange={onColorChange}>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                        <option value="teal">Teal</option>
                        <option value="green">Green</option>

                    </select>
                </div>

                <div className='btn-div'>
                    <button className='button' onClick={() => {
                        let note = {
                            ...props.noteToEdit,
                            text: noteText,
                            color: noteColor,
                        }
                        props.editNote(note.id, note)
                    }}>UPDATE NOTE</button>
                </div>

            </div>
        </div>
    )
}

export default EditForm;