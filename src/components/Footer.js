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
                <div className="footer d-flex align-items-center justify-content-between" >
                    <div>
                        <span className='text-center'>Copyright &copy; All Rights Reserved</span>
                    </div>
                    <div>
                        <span className='mx-2' ><a href="https://www.instagram.com/anxious_me__/" target={'_blank'} className='link-light' rel="noreferrer" ><i className="bi bi-instagram" /></a></span>
                        <span className='mx-2' ><a href="https://github.com/caringcoder" className='link-light' target={'_blank'} rel="noreferrer" ><i className="bi bi-github" /></a></span>
                        <span className='mx-2' ><a href="https://www.linkedin.com/in/aditya-raj-chauhan-689038220/" target={'_blank'} rel="noreferrer" className='link-light'><i className="bi bi-linkedin" /></a></span>


                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer