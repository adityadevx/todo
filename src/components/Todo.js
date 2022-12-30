import React, { useContext } from 'react'
import TodoItem from "./TodoItem";
import nothing from './nothing.png'

export const Todos = ({ todos, onDelete,mode }) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }


    let display = <div className='container d-flex align-items-center justify-content-center' ><img src={nothing} alt="" style={{ width: 'inherit' }} /></div>;
    return (
        <>

            <div className="container" style={myStyle}>
                <h3 className=" text-center my-3">Todos List</h3>
                {/* {console.log(typeof todos, todos)} */}
                {Array.from(todos).length === 0 ? display :
                    Array.from(todos).map((element) => {
                        return (
                            <TodoItem todo={element} key={element.sno} onDelete={onDelete} mode ={mode}/>
                        )
                    })

                }
            </div>
        </>

    )
}

export default Todos