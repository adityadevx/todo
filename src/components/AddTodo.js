import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';


function AddTodo(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) {

            alert("Please enter a valid title or description")
            console.log(title, description)
        }
        else {
            props.addTodo(title, description)
        }
    }



    return (
        <>
            <div className="container my-3">
                {props.setProgress(10)}
                <h2 className='text-center'><Typewriter
                    options={{
                        strings: ['Add A Todo'],
                        autoStart: true,
                        loop: true,
                    }}
                /></h2>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" placeholder="Please give a title" />
                </div>
                {props.setProgress(50)}
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => { setDescription(e.target.value) }} ></textarea>
                </div>
                <button type="button" className="btn btn-success" id='animateBorder'onClick={onSubmit}>Add Todo</button>
            </div>
            {props.setProgress(100)}
        </>
    )
}

export default AddTodo