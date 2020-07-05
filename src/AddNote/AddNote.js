import React, { Component } from 'react'
import './AddNote.css';
import Select from 'react-select';
import dummyStore from '../dummy-store';

export default class AddNote extends Component {
    state = {
        notes: [],
        folders: []
    };

    componentDidMount() {
         this.setState(dummyStore);
    }

    render() {

        console.log(this.state.folders);

        return (

            <form action="/notes" method="post" className="Noteful-form">
            <p>
                <label>Title</label><br />
                <input type="text" name="title" required/>
            </p>

            <p>
                    <label>Folder</label><br />
                    <select value={this.state.mycar}>
                        {this.state.folders.map(folder => <option value={folder.id}>{folder.name}</option>)}
                    </select>
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


