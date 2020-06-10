import React, { useState } from 'react';
import { v4 as uuid} from 'uuid';

function Form(props) {

    const [noteText, setNoteText] = useState('');
    const [noteColor, setNoteColor] = useState('#20D3CF');

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
                <input className='input' type='text' placeholder='Enter Note' onChange={onInputChange} value={noteText} />
            </div>

            <label className='label'>Note Color</label>
            <div>
                <select className='input' value={noteColor} onChange={onColorChange}>
                    <option value="#20D3CF">Teal</option>
                    <option value="#D183DB">Purple</option>
                    <option value="#9CDB83">Green</option>
                    <option value="#F26969">Red</option>
                    <option value="#37AAE1">Blue</option>
                    <option value="#FF9A7F">Orange</option>

                </select>
            </div>
            
            <div className='btn-div'>
            <button className='button' onClick={() => {
                if(!noteText) return
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