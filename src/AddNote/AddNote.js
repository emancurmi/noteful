import React from 'react'
import './AddNote.css';

export default function AddNote(props) {
    return (

        <form action="/notes" method="post">
            <p>
                <label>Title</label><br />
                <input type="text" name="title" required/>
            </p>

            <p>
                <label>Folder</label><br />
                <input type="text" name="folder" required />
            </p>
            <p>
                <label>Note</label><br />
                <input type="text" name="content" required />
            </p>
            <p>
                <button>Create Note</button>
                <button type="reset">Reset form</button>
            </p>
        </form>

    )
}