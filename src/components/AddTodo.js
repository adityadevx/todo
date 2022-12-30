import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';


function AddTodo(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            // alert("Please enter a valid title or description")
            // console.log(title, description)
            props.showAlert('danger', 'Title and description cannot be empty')
        }
        else {
            props.addTodo(title, description)
            props.showAlert('success', 'You have succesfully added a note')
        }
        setTitle("");
        setDescription("")
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
                    <input type="text" onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" placeholder="Please give a title" value={title}
                        style={{ backgroundColor: props.mode === 'dark' ? '#272730' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                    />
                </div>
                {props.setProgress(50)}

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3" onChange={(e) => { setDescription(e.target.value) }} value={description} placeholder="Please Enter a Description"
                        style={{ backgroundColor: props.mode === 'dark' ? '#272730' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                    ></textarea>
                </div>

                <button type="button" className="btn btn-success" id='animateBorder' onClick={onSubmit}>Add Todo</button>
            </div>
            {props.setProgress(100)}
        </>
    )
}

export default AddTodo