import React from 'react'
import './AddFolder.css';

export default function AddFolder(props) {
    return (
        <form action="/folder" method="post" className="Noteful-form">
                <p>
                    <label>Folder Name</label><br/>
                    <input type="text" name="name" required/>
                </p>
  
                <p>
                    <button>Create Folder</button>
                    <button type="reset">Reset form</button>
                </p>
        </form>
    )
}