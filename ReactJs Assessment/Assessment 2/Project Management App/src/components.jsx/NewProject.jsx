import { useState } from "react";

export default function NewProject({onAdd}) {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [date,setDate] = useState("");

    function handleSubmit(e){
        e.preventDefault();

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
            <div className="no-project">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>TITLE</label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>DESCRIPTION</label>
                        <input
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div>
                        <label>DUE DATE</label>
                        <input
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            required
                        />

                    </div>
                    <button type="submit">
                        Save
                        </button>

                </form>
            </div>

        </>
    );
}  