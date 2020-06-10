import React, { useState } from 'react';
import { v4 as uuid} from 'uuid';

function Form(props) {

    const [noteText, setNoteText] = useState('');
    const [noteColor, setNoteColor] = useState('red');

    const onInputChange = (event) => {
        setNoteText(event.target.value)
    }

    const onColorChange = (event) => {
        setNoteColor(event.target.value)
    }


    return (
        <div className='form'>
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
                    id:uuid(),
                    text:noteText,
                    color:noteColor,
                    date:Date.now()
                }
                props.add(note);
                setNoteText('')
            }}>ADD NOTE</button>
             </div>

        </div>
    )
}

export default Form;