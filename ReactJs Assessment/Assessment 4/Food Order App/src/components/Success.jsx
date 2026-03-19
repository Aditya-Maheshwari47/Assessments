import { useRef, useEffect } from "react"

export default function Success({openSuccess}) {
    const successRef = useRef();
    useEffect(() => {
        if (openSuccess) {
            successRef.current.showModal();
        } else {
            successRef.current.close();
        }
    },[openSuccess])
    return (
        <>
            <dialog className="modal" ref={successRef} >
                <h2>Success!</h2>
                <p>Your order was submitted successfully </p>
                <p>We will get back to you with more details via email within the next few minutes.</p>
                <div className="modal-actions">
                    <button className="button" onClick={() =>successRef.current.close()}>Okay</button>

                </div>
            </dialog>
        </>

    )
}