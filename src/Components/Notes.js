import React, { useState } from 'react';
import EditForm from './EditForm';
import moment from 'moment'


function Notes(props) {

    const [showEditForm, setShowEditForm] = useState(false);
    const [noteToBeEdited, setNoteToBeEdited] = useState({});

    const edit = (id, note) => {
        props.editNote(id, note);
        setShowEditForm(false);
    }
    return (
        <div>
            {props.notes.map(note => {
                return <div className='note'>
                    <div className='header'>
                        <p className='title'>Note 5</p>
                        <div className='buttonArea'>
                            <button className='fa fa-pencil' onClick={() => { setShowEditForm(true); setNoteToBeEdited(note) }}></button>
                            <button onClick={() => { props.delete(note.id) }} className='fa fa-trash'></button>

                        </div>
                    </div>
                    <p className='text'>{note.text}</p>
                    <p className='date'>{moment(note.date).format('MMMM D, h:mm A')}</p>

                </div>
            })}
            {/* conditional rendering of the Editform */}
            {showEditForm && (<EditForm noteToEdit={noteToBeEdited} editNote={edit} />)}

        </div>
    )
}

export default Notes;