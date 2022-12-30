import React from 'react'

function Footer(props) {
    let myStyle = {
        position: 'sticky',
        width: '100%',
        bottom: 0,
    }
    return (
        <>
            <footer style={myStyle} className='text-center bg-dark text-white p-2'>
                <div className="footer" >
                    <h5 className='text-center'>Copyright &copy; All Rights Reserved</h5>
                </div>
            </footer>
        </>
    )
}

export default Footer