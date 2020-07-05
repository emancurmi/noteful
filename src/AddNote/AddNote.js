import React, { Component } from 'react'
import './AddNote.css';
import Select from 'react-select';

export default class AddNote extends Component {
    

    render() {

        const folders = this.props.folders;

        return (

            <form action="/notes" method="post" className="Noteful-form">
            <p>
                <label>Title</label><br />
                <input type="text" name="title" required/>
            </p>

            <p>
                <label>Folder</label><br />
                <Select options={folders} />
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
        );
    }
}


