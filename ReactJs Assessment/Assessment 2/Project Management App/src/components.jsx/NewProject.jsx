import { useState } from "react";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({onAdd,onCancel}) {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [dueDate,setDate] = useState("");

    const modal = useRef();
    function handleSubmit(e){
        e.preventDefault();
        if( 
            title.trim() === "" ||
            description.trim() === "" ||
            dueDate.trim() === ""
        ) {
            modal.current.open();
            return;

        }

        onAdd({
            title,
            description,
            dueDate
        });
        setTitle("");
        setDescription("");
        setDate("");

    }

    return (
        <>
            <Modal ref={modal}>
                <h2>Invalid Input</h2>
                <p>Oops ... looks like you forgot to enter a value.</p>
                <p>Please make sure you provide valid value for every input field.</p>

            </Modal>
            <div className="new-project">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>TITLE</label>
                        <br />
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            
                        />
                    </div>
                    <div>
                        <label>DESCRIPTION</label>
                        <br />
                        <input
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            
                        />
                    </div>
                    
                    <div>
                        <label>DUE DATE</label>
                        <br />
                        <input
                            type="date"
                            value={dueDate}
                            onChange={e => setDate(e.target.value)}
                        
                        />

                    </div>
                    <div>

                    <button id="save-button" type="submit">
                        Save
                    </button>
                    <button id="cancel-button" onClick={onCancel}>
                        Cancel
                    </button>
                    </div>

                </form>
            </div>

        </>
    );
}  